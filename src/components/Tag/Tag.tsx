import { FC } from "react";
import "./Tag.styles.scss";

//INTERFAS//
interface TagProps {
  label: string;
  color: string;
  backgroundColor: string;
}

//BODY//
const Tag: FC<TagProps> = ({ label, color, backgroundColor }) => {
  return (
    <div
      className="tag"
      style={{
        color,
        backgroundColor,
      }}
    >
      {label}
    </div>
  );
};

export { Tag };
