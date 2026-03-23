import { useEffect, useId, useRef, useState } from "react";
import "./DataTiles.scss";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Pagination from "./Pagination";
import { format } from "../utils/format";
import Translatable from "./Translatable";
import RichText from "./RichText";
import { textStyleToCssClass } from "../utils/styling";
import { scrollToElement } from "../utils/browser";
import { getRowKey } from "./ListView";

interface DataTilesProps {
  /** Data that should be shown in the table */
  data: Record<string, any>[];
  /**  currently selected rows*/
  selectedRows?: Record<string, any>[];
  selectionKey?: string;
  /** "name" has the display name of the column, "value" has the key that is used to look up the displayed value in the objects in the "data" array */
  columns: IListColumn[];
  selectionLowerLimit?: number;
  selectionUpperLimit?: number;
  /** Called every time something is selected/deselected */
  onSelect?: (row: Record<string, any>, rowSelected: boolean, selectedRows: Record<string, any>[]) => void;
  /** Number of records to show on each page.
   * If undefined, show all data without paging */
  pageSize?: number;
  /** The key in the data object that is used to find the title that should be shown */
  titleKey?: string;
  /** The key in the data object that has the imageUrl*/
  imageKey?: string;
  /** The link is shown at the bottom of the card, if supplied. "key" is the key in the data object that has the url of the link. "text" and "icon" are what is shown as the link at the bottom. */
  link?: { key: string, text: string, icon: IconProp };
  descriptionKey?: string;
}

const isSelected = (rec: Record<string, any>, selectionKey: string | undefined, selectedRows: Record<string, any>[]): boolean => {
  if (typeof selectionKey === "undefined" || typeof rec[selectionKey] === "undefined" || rec[selectionKey] === null)
    return false;
  return selectedRows.some(sr => (rec[selectionKey] + "") == (sr[selectionKey] + ""));
}

const DataTiles = ({
  data,
  selectedRows = [],
  selectionKey,
  columns,
  selectionLowerLimit,
  selectionUpperLimit,
  onSelect,
  pageSize,
  titleKey,
  imageKey,
  link,
  descriptionKey
}: DataTilesProps) => {
  let [selected, setSelected] = useState(selectedRows);
  let [page, setPage] = useState(0);
  let radioName = useId();
  const ref = useRef<HTMLDivElement>(null);
  const dataKey = data.map(d => typeof selectionKey === "undefined" ? JSON.stringify(d) : d[selectionKey]).join("|");
  useEffect(() => setPage(0), [dataKey]);
  useEffect(() => setSelected(selectedRows), [selectedRows]);

  let visibleData = data;
  if (pageSize) {
    visibleData = data.slice(page * pageSize, page * pageSize + pageSize);
  }

  //Selects rows on checkbox/radio click
  const handleSelection = (
    row: Record<string, any>,
    add: boolean = true
  ) => {
    let currentSelected: Record<string, any>[] = [];
    if (selectionUpperLimit === 1 && selectionLowerLimit === 1)
      currentSelected = [row];
    else if (add)
      currentSelected = selected.concat(row);
    else
      currentSelected = selected.filter((s) => typeof selectionKey == "undefined" || s[selectionKey] !== row[selectionKey]);

    setSelected(currentSelected);
    onSelect?.(row, add, currentSelected);
  };

  //Disable checkbox if upper limit/lower limit is reached
  const isCheckboxDisabled = (
    isSelected: boolean
  ): boolean => {
    const selectedRowCount = selected.length;
    if (selectedRowCount <= (selectionLowerLimit || Number.MIN_VALUE))
      return isSelected;
    else if (selectedRowCount >= (selectionUpperLimit || Number.MAX_VALUE))
      return !isSelected;
    return false;
  };

  return (
    <div className="data-tile-wrapper" ref={ref}>
      <div className="container">
        {visibleData.map(row => (
          <div className="tile col-3" key={getRowKey(row, titleKey)}>
            {selectionUpperLimit === 0 ? <></> :
              <div className={selectionLowerLimit === 1 && selectionUpperLimit === 1 ? "tile-radio" : "tile-checkbox"}>
                {(selectionLowerLimit === 1 && selectionUpperLimit === 1) ? <Radio name={radioName} selectedValue={isSelected(row, selectionKey, selected) ? "1" : "0"} options={[{ name: "", value: "1" }]} onChange={v => handleSelection(row)} /> : (
                  <Checkbox
                    onChange={(selected) => handleSelection(row, selected)}
                    checked={isSelected(row, selectionKey, selected)}
                    disabled={isCheckboxDisabled(isSelected(row, selectionKey, selected))}
                  />
                )}
              </div>
            }
            {imageKey ? <img className="img-tile" src={row[imageKey]} /> : ""}
            {titleKey ? <h3 title={row[titleKey]}><RichText text={row[titleKey]} /></h3> : ""}
            {descriptionKey ? <p title={row[descriptionKey]}><RichText text={row[descriptionKey]} /></p> : ""}
            <div className="tile-content mb-1">
              {columns.map((col, columnIndex) => (
                <div className={col.customRender ? "customer-render-item" : "item"} key={columnIndex}>
                  <div className={"header " + textStyleToCssClass(col.headerStyle)}><RichText text={col.name} />{col.mandatory && <span className="required">*</span>}</div>
                  <div className={col.customRender ? "custom-render" : ("value " + textStyleToCssClass(col.textStyle))}>{col.customRender ? col.customRender(row, col) : <RichText text={format(row[col.value], col.formatting)} />}</div>
                </div>
              ))}
            </div>
            {(link && row[link.key]) ? <a href={row[link.key]} target="_blank"><span><RichText text={link.text} /></span><FontAwesomeIcon icon={link.icon} /></a> : <></>}
          </div>
        ))}
        {data.length == 0 &&
          <div className="empty-records"><Translatable name="noData" /></div>
        }
        <Pagination
          currentPage={page}
          itemsPerPage={pageSize}
          totalItems={data.length}
          onPageChanged={p => {
            setPage(p);
            if (ref.current != null)
              scrollToElement(ref.current);
          }}
        />
      </div>
    </div>
  );
};
export default DataTiles;
