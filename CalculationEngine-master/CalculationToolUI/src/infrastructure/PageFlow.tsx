import { useContext, useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import Train from "../components/Train";
import "./PageFlow.scss"
import { publish, subscribe } from "../utils/events";
import Translatable from "../components/Translatable";
import { assets } from "../backend/backend";
import { ConfigAssignmentContext, ConfigStateContext } from "./ConfigSessionProvider";
import { findFirstVariable, getIdWithoutPrefix, getPropertyValue } from "../utils/ace";

type PageFlowProps = {
  /** Indicates if pages should be shown with next/previous buttons, or they should be shown one after another. */
  flow?: "paged" | "continuous";
  /** Child elements are expected to be of type `Page` */
  pages: Page[];
  /** Indicates if all content should be loaded with every configure call, or only content of the current page. Only valid together with flow = "paged".
   * DISCLAIMER: if any of the UI relies on data from other pages (using any of the "path" properties in the Show As Specification), these will not update correctly when using "current".
  */
  load?: "all" | "current";
}

const PageFlow = ({
  flow = "paged",
  pages,
  load = "all"
}: PageFlowProps) => {
  if (flow === "continuous" && load === "current") {
    console.error("Can't show page flow as continuous while only loading current page");
    return <></>;
  }
  let [currentPage, setCurrentPage] = useState(0);

  let activePageArray: Array<string> = [];
  if (pages.length > 0) {
    const filteredVariable = findFirstVariable(pages[currentPage].section);
    if (filteredVariable != null) {
      const pagesToLoad = getPropertyValue(filteredVariable, "PAGE_CONTROL") as string;
      if (pagesToLoad != undefined) {
        activePageArray = pagesToLoad.split(',');
      }
    }
  }

  const getPageNumber = (step: number): number => {
    if (activePageArray.length > 0) {
      const currentPageId = getIdWithoutPrefix(pages[currentPage].section.id);
      const currentPageIndex = activePageArray.findIndex(item => item === currentPageId);

      let sectionToLoad = activePageArray.filter((_, index) => index === currentPageIndex + step);
      if (sectionToLoad.length > 0) {
        const sectionPageId = sectionToLoad[0];
        if (sectionPageId != "") {
          let sectionPageIndex = pages.findIndex(item => getIdWithoutPrefix(item.section.id) === sectionPageId);
          return sectionPageIndex;
        }
      }
    }
    return Math.max(Math.min(currentPage + step, pages.length - 1), 0);
  };

  let trainRef = useRef<HTMLUListElement>(null);
  const state = useContext(ConfigStateContext);
  const interaction = useContext(ConfigAssignmentContext);

  const changePage = async (page: number, skipLoad?: boolean) => {
    if (load === "current" && skipLoad !== true)
      await interaction.loadSection(pages[page].section.id);
    setCurrentPage(page);
    publish({ event: "paging", eventValue: page, state });
    setTimeout(() => trainRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  }

  useEffect(() => {
    if (load === "current" && typeof state.currentSection === "undefined" && pages.length > 0) {
      interaction.setSection(pages[0].section.id);
    }
  }, [load, state.currentSection, pages.length]);

  useEffect(() => {
    let sub = subscribe(ctx => {
      if (ctx.event === "action" && ctx.eventValue.action === "Go_To") {
        let page = ctx.eventValue.page;
        if (typeof page === "number")
          changePage(getPageNumber(page));
        else {
          let idx = pages.findIndex(p => getIdWithoutPrefix(p.section.id) === page);
          if (idx >= 0)
            changePage(idx);
          else
            console.error("Go_To: Can't find page with id " + page);
        }
      }
    });
    return sub;
  }, [state, pages.length]);

  if (flow === "continuous")
    return <>{pages.map(p => p.content)}</>;

  if (pages.length === 0)
    return <></>;

  let missingFields = containsMissingMandatoryFields(pages[currentPage].section);

  return <>
    {pages.length > 1 && <Train totalSteps={(activePageArray.length > 0 ? activePageArray.length : pages.length)} currentStep={currentPage + 1} ref={trainRef} />}
    <div style={{ marginBottom: "20px", marginTop: "20px" }}>
      {pages[currentPage].content}
    </div>
    <div className={currentPage === 0 ? "paging-buttons btn-end" : "paging-buttons"}>
      {
        currentPage === 0 ? "" : (
          <Button
            label={<Translatable name="previous" />}
            size="medium"
            onClick={async () => await changePage(getPageNumber(-1))}
            iconLeft={assets.arrowLeft}
          />
        )
      }
      <div className="sub-paging-btns">
        <Button
          primary
          ghost
          disabled={state.assignments.length === 0}
          label={<Translatable name="reset" />}
          size="medium"
          iconLeft={assets.reset}
          onClick={async () => {
            await interaction.reset(pages[0].section.id);
            await changePage(0, true);
            publish({ event: "reset" });
          }}
        />

        {
          (activePageArray.length > 0 ? activePageArray[activePageArray.length - 1] === getIdWithoutPrefix(pages[currentPage].section.id) : currentPage === pages.length - 1) ? "" : (
            <Button
              label={<Translatable name="next" />}
              primary
              size="medium"
              onClick={async () => {
                if (!missingFields)
                  await changePage(getPageNumber(1))
              }}
              iconRight={assets.arrowRight}
              positionHorizontal="Right"
              disabled={missingFields}
            />
          )
        }
      </div>
    </div >
  </>;
}
export default PageFlow;

const containsMissingMandatoryFields = (section: Section): boolean => {
  if (section.variables.some(variableMissingAndMandatory))
    return true;
  for (let s of section.sections)
    if (containsMissingMandatoryFields(s))
      return true;
  return false;
}

const variableMissingAndMandatory = (variable: Variable): boolean => {
  if (!variable.values.some(v => v.assigned) && variable.properties.some(p => p.id === "MANDATORY" && p.value === "True")) {
    console.log("Missing mandatory field: " + variable.id);
    return true;
  }
  return false;
}
