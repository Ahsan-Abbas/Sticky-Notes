import { useEffect, useId, useState } from "react";
import "./Tiles.scss";
import { textStyleToCssClass } from "../utils/styling";
import RichText from "./RichText";

interface TilesProps {
  data: TileData[];
  selectedValue?: string | number;
  onSelect?: (data: TileData) => void;
  positionHorizontal?: HorizontalPosition;
  textStyle?: TextStyle;
  size?: "Normal" | "Large";
}

interface TileData {
  imageUrl: string;
  selectedImageUrl?: string;
  label: string;
  value: string | number;
  incompatible?: boolean;
  description?: string;
}

const Tiles = ({ data, selectedValue, onSelect, positionHorizontal = "Left", textStyle = "Normal", size = "Normal" }: TilesProps) => {
  const id = useId();
  const [state, setState] = useState(selectedValue);
  useEffect(() => {
    setState(selectedValue);
  }, [selectedValue]);
  const cls = textStyleToCssClass(textStyle);
  return <div className={"tiles-container " + positionHorizontal.toLowerCase()}>
    {data.map(val => (
      <div className={"tile-wrapper " + size.toLowerCase()} key={val.value}>
        <div className={"option" + (val.incompatible ? " incompatible" : "")}>
          <input type="checkbox" id={id + val.value} checked={val.value === state} onChange={(e) => {
            setState(val.value);
            onSelect?.(val)
          }} />
          <div className="label-wrapper">
            <label htmlFor={id + val.value}>
              <img src={(val.value === state && val.selectedImageUrl) || val.imageUrl} />
              <div className="img-title"><span className={cls} title={val.label}><RichText text={val.label} /></span></div>
            </label>
          </div>
        </div>
        {
          size === "Large" ? (
            <span><RichText text={val.description} /></span>
          ) : ""
        }
      </div>
    ))}
  </div>
}
export default Tiles;
