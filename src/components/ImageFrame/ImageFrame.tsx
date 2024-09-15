import { FC } from "react";
import "./image.styles.scss";

interface ImageFrameProps {
  src: string;
  alt: string;
  whidth: string;
}

const ImageFrame: FC<ImageFrameProps> = ({ src, alt, whidth }) => {
  return <img src={src} alt={alt} width={whidth} className="class-image" />;
};

export default ImageFrame;
