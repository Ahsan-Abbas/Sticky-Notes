import { useState } from "react";
import "./ListView.scss";
import Table from "./Table";
import DataTiles from "./DataTiles";
import Select from "./Select";
import { getDistinctFilter } from "../utils/lists";
import useDeepCompareEffect from "use-deep-compare-effect";
import { assets } from "../backend/backend";
import { format } from "../utils/format";
import Translatable from "./Translatable";
import Input from "./Input";
import IconButton from "./IconButton";

interface IListViewProps {
  alignment?: HorizontalPosition;
  data: Record<string, any>[];
  columns: IListViewColumn[];
  titleKey?: string;
  imageKey?: string;
  descriptionKey?: string;
  selectionLowerLimit?: number;
  selectionUpperLimit?: number;
  selectionKey?: string;
  childSelectionKey?: string;
  onSelect?: (row: Record<string, any>, rowSelected: boolean, selectedRows: Record<string, any>[]) => void;
  onDelete?: (row: Record<string, any>) => void;
  selectedRows?: Record<string, any>[];
  views?: ListViewType[];
  showCount?: boolean;
}

const viewIcon: Record<ListViewType, string> = {
  "table": assets.listView,
  "tile": assets.blockView
};

const findSelectedChildIndex = (row: Record<string, any>, childObject: string, childSelectionKey?: string): number => {
  if (!childSelectionKey)
    return -1;

  let selectedIdx = (row[childObject] as Array<Record<string, any>>).findIndex(e => row[childSelectionKey] == e[childSelectionKey] && e[childSelectionKey] !== null);

  return selectedIdx;
}

const flattenData = (data: Record<string, any>[], columns: IListViewColumn[], childSelectionKey?: string): Record<string, any>[] => {
  const childKeys = columns
    .map(c => c.childObject)
    .filter((o, i, arr) => typeof o !== "undefined" && arr.findIndex(c => c === o) === i) as string[];

  return data.map(d => {
    let row = d;
    for (let childKey of childKeys) {
      let cIdx = findSelectedChildIndex(row, childKey, childSelectionKey);
      if (cIdx === -1)
        continue;
      let child = row[childKey][cIdx];
      if (child == null || typeof child === "undefined")
        continue;
      for (let ccol of Object.keys(child))
        row[ccol] = child[ccol];
    }
    return row;
  })
}
const getValueList = (row: Record<string, any>, col: IListColumn): NameValuePair[] =>
  col.childObject
    ? (row[col.childObject] as Record<string, any>[])
      .filter(o => o[col.value] != null)
      .map((o: Record<string, any>) => ({ name: format(o[col.value], col.formatting) as string, value: o[col.value] }))
      .filter(getDistinctFilter("value"))
    : [];

export const getRowKey = (row: Record<string, any>, key: string | undefined) =>
  JSON.stringify(row); //key ? row[key] : JSON.stringify(row);

const ListView = ({
  alignment = "Right",
  data,
  columns,
  titleKey,
  imageKey,
  descriptionKey,
  selectionLowerLimit,
  selectionUpperLimit,
  onSelect,
  onDelete,
  selectionKey,
  childSelectionKey,
  selectedRows = [],
  views = ["table", "tile"],
  showCount = false
}: IListViewProps) => {
  const [currentData, setCurrentData] = useState<Record<string, any>[]>([]);
  const [activeButton, setActiveButton] = useState(views && views.length > 0 ? views[0] : "table");

  const renderDropdown = (row: Record<string, any>, col: IListColumn): JSX.Element => (
    <Select
      allowEmpty={typeof row[col.value] === "undefined" || row[col.value] === "" || row[col.value] === null}
      textStyle={col.textStyle}
      value={row[col.value] || undefined}
      options={getValueList(row, col)}
      onChange={v => {
        if (typeof selectionKey === "undefined")
          return;
        let isSelected = false;
        let idx = -1;
        let changeData = flattenData(data.map((d, i) => {
          if (d[selectionKey] == row[selectionKey]) {
            d[col.value] = v;
            idx = i;
            isSelected = selectedRows.some(s => s[selectionKey] == d[selectionKey]);
            if (isSelected)
              selectedRows = selectedRows.map(s => s[selectionKey] == d[selectionKey] ? d : s);
          }
          return d;
        }), columns, childSelectionKey);
        onSelect?.(changeData[idx], isSelected, selectedRows)
        setCurrentData(changeData);
      }}
    />
  );

  const renderDelete = (row: Record<string, any>, col: IListColumn): JSX.Element => (
    <IconButton
      icon={assets.trash}
      onClick={() => {
        onDelete?.(row);
      }}
    />
  );

  const renderInput = (row: Record<string, any>, col: IListColumn): JSX.Element => (
    <Input
      value={row[col.value] || undefined}
      textStyle={col.textStyle}
      onChange={v => {
        if (typeof selectionKey === "undefined")
          return;
        let isSelected = false;
        let idx = -1;
        let changeData = flattenData(data.map((d, i) => {
          if (d[selectionKey] == row[selectionKey]) {
            d[col.value] = v;
            idx = i;
            isSelected = selectedRows.some(s => s[selectionKey] == d[selectionKey]);
            if (isSelected)
              selectedRows = selectedRows.map(s => s[selectionKey] == d[selectionKey] ? d : s);
          }
          return d;
        }), columns, childSelectionKey);
        onSelect?.(changeData[idx], isSelected, selectedRows);
        setCurrentData(changeData);
      }}
    />
  );

  const createCustomRender = (col: IListViewColumn): ((row: Record<string, any>, col: IListColumn) => JSX.Element) | undefined => {
    if (col.functionality === "filter")
      return renderDropdown;
    else if (col.functionality === "delete")
      return renderDelete;
    else if (col.functionality === "input")
      return renderInput;
  }

  useDeepCompareEffect(() => {
    let d = flattenData(data, columns, childSelectionKey);
    setCurrentData(d);
  }, [data, columns, selectedRows, childSelectionKey]);

  return (
    <div className="listview-wrapper">
      <div className="listview-header">
        {showCount &&
          <div className="listview-count"><Translatable name="listCount" parameters={[data.length]} /></div>
        }
        {views && views.length > 1 ? (
          <div className={"switch switch-" + alignment.toLowerCase()}>
            {views.map(view => (
              <button
                key={view}
                className={activeButton === view ? "switch-active" : ""}
                onClick={() => setActiveButton(view)}
              >
                <img src={viewIcon[view]} alt="Table View" className="icon" />
              </button>
            ))}
          </div>
        ) : <></>}
      </div>
      <div>
        {activeButton === "table" ? (
          <Table
            data={currentData}
            columns={columns.map(c => ({
              ...c,
              customRender: createCustomRender(c)
            }))}
            selectionLowerLimit={selectionLowerLimit}
            selectionUpperLimit={selectionUpperLimit}
            onSelect={onSelect}
            selectionKey={selectionKey}
            selectedRows={selectedRows}
            pageSize={10}
            titleKey={titleKey}
          />
        ) : (
          <DataTiles
            data={currentData}
            columns={columns.map(c => ({
              ...c,
              customRender: createCustomRender(c)
            }))}
            selectionLowerLimit={selectionLowerLimit}
            selectionUpperLimit={selectionUpperLimit}
            onSelect={onSelect}
            selectionKey={selectionKey}
            selectedRows={selectedRows}
            pageSize={9}
            imageKey={imageKey}
            titleKey={titleKey}
            descriptionKey={descriptionKey}
          />
        )}
      </div>
    </div>
  );
};
export default ListView;
