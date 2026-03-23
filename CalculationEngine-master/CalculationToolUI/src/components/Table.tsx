import { useId, useState, useEffect, useRef } from "react";
import "./Checkbox";
import Checkbox from "./Checkbox";
import Pagination from "./Pagination";
import Radio from "./Radio";
import "./Table.scss";
import { format } from "../utils/format";
import Translatable from "./Translatable";
import RichText from "./RichText";
import { textStyleToCssClass } from "../utils/styling";
import { scrollToElement } from "../utils/browser";
import { getRowKey } from "./ListView";

interface TableProps {
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
  titleKey?: string;
}

const isSelected = (rec: Record<string, any>, selectionKey: string | undefined, selectedRows: Record<string, any>[]): boolean => {
  //if (rec["productDisplayName"] == "Thermal Insulation Cavity Slab 032") console.log("isSelected", selectedRows);
  if (typeof selectionKey === "undefined" || typeof rec[selectionKey] === "undefined" || rec[selectionKey] === null)
    return false;
  return selectedRows.some(sr => (rec[selectionKey] + "") == (sr[selectionKey] + ""));
}

const groupColumns = (colCount: number, columns: IListColumn[]): IListColumn[][] => {
  const groupedArray: IListColumn[][] = [];
  var cols = columns.filter(col => typeof col.customRender === "undefined");

  for (let i = 0; i < colCount; i++) {
    groupedArray[i] = [];
    for (let c = i; c < cols.length; c += colCount)
      groupedArray[i].push(cols[c]);
  }

  return groupedArray.filter(g => g.length > 0);
}

const Table = ({
  data,
  selectedRows = [],
  selectionKey,
  columns,
  selectionLowerLimit,
  selectionUpperLimit,
  onSelect,
  pageSize = 0,
  titleKey
}: TableProps) => {
  //let [selected, setSelected] = useState(selectedRows);
  let selected = selectedRows;
  let setSelected = (_: any) => { };
  let [page, setPage] = useState(0);
  let radioName = useId();
  const ref = useRef<HTMLDivElement>(null);
  const dataKey = data.map(d => typeof selectionKey === "undefined" ? JSON.stringify(d) : d[selectionKey]).join("|");
  useEffect(() => setPage(0), [dataKey]);
  //useEffect(() => setSelected(selectedRows), [selectedRows]);

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

  let hasCustomRenderCols = columns.some(c => c.customRender);
  let hasNormalCols = columns.some(c => typeof c.customRender === "undefined");

  let colCount = 2;
  if (typeof titleKey === "undefined" || titleKey === "")
    colCount += 3;
  if (!hasCustomRenderCols)
    colCount++;

  return (
    <div className="table-container" ref={ref}>
      <div className="table-wrapper">
        <div className="flex-container">
          <div className="flex-body">
            {visibleData.map((row) => (
              <div className="flex-row" key={getRowKey(row, selectionKey ?? titleKey)}>
                {titleKey && <div className="flex-cell" style={{ flex: 1 }}>
                  {selectionUpperLimit === 0 ? "" : selectionUpperLimit === 1 && selectionLowerLimit === 1
                    ? <div className="col-selection"><Radio name={radioName} selectedValue={isSelected(row, selectionKey, selected) ? "1" : "0"} options={[{ name: "", value: "1" }]} onChange={v => handleSelection(row)} /></div>
                    : <div className="col-selection">
                      <Checkbox
                        onChange={(selected) => handleSelection(row, selected)}
                        checked={isSelected(row, selectionKey, selected)}
                        disabled={isCheckboxDisabled(isSelected(row, selectionKey, selected))}
                      />
                    </div>
                  }
                  <div className="title-cell" style={{ flex: 1 }}>
                    <p><RichText text={row[titleKey]} /></p>
                  </div>
                </div>}
                <div className="flex-cell" style={{ flex: hasNormalCols ? 2 : 1 }}>
                  {groupColumns(colCount, columns).map((group, groupIndex) => (
                    <div className="flex-sub-cell" key={groupIndex}>
                      {group.map((col) => (
                        <div className={"sub-info sub-info-" + groupIndex} key={col.name}>
                          <div className={"title " + textStyleToCssClass(col.headerStyle)}><RichText text={col.name} />{col.mandatory && <span className="required">*</span>}</div>
                          <div className={"value " + textStyleToCssClass(col.textStyle)}><RichText text={format(row[col.value], col.formatting)} /></div>
                        </div>
                      ))}
                    </div>
                  ))}
                  {/* Conditionally render the last flex-sub-cell based on customRender presence */}
                  {columns.some((col) => col.customRender) ? (
                    columns.filter(col => typeof col.customRender !== "undefined").map(col => (
                      <div className="flex-sub-cell" key={col.value}>
                        <div className="sub-info sub-info-customrender">
                          <div className={"title " + textStyleToCssClass(col.headerStyle)}><RichText text={col.name} />{col.mandatory && <span className="required">*</span>}</div>
                          <div className="value"><RichText text={col.customRender?.(row, col)} /></div>
                        </div>
                      </div>
                    ))
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div >
      {
        data.length === 0 &&
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
  );
};
export default Table;
