import { ReactHTML } from "react";
import classNames from "classnames";
import "./textWithClamp.scss";

interface Props {
  text: string;
  lines: 1 | 2 | 3 | 4 | 5;
  tag?: keyof ReactHTML;
  fontSize?: string;
  className?: string;
}

const TextWithClamp = ({
  text,
  fontSize = "14px",
  tag = "p",
  lines,
  className,
}: Props) => {
  const TagAs = tag ? tag : "p";

  return (
    <TagAs
      //   className={`text-clamped text-clamped-${lines}`}
      className={classNames(`text-clamped text-clamped-${lines}`, className)}
      style={{ fontSize }}
    >
      {text}
    </TagAs>
  );
};

export default TextWithClamp;
