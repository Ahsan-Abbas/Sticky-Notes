import React from "react";
import "./Image.scss";

type ImageDisplayMode = "Responsive" | "Thumbnail" | "Column";
interface ImageProps {
  imageDisplayMode?: ImageDisplayMode;
  controlPositionHorizontal?: HorizontalPosition;
  src: string;
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
}

const Image = ({
  imageDisplayMode = "Column",
  controlPositionHorizontal = "Left",
  src,
  onLoad
}: ImageProps) => {
  return (
    <div className="img-wrapper">
      <img src={src} className={imageDisplayMode.toLowerCase() + " " + controlPositionHorizontal.toLocaleLowerCase()} onLoad={onLoad} />
    </div>
  );
};
export default Image;
