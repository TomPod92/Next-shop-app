import classNames from "classnames";
import "./divider.scss";

interface Props {
  verticalMargin?: number;
  marginTop?: number;
  marginBottom?: number;
  className?: string;
}

const Divider = ({
  verticalMargin = 2,
  marginTop = 0,
  marginBottom = 0,
  className,
}: Props) => {
  const marginProperty = verticalMargin
    ? `${verticalMargin}rem 0`
    : `${marginTop}rem 0 ${marginBottom}rem 0`;
  return (
    <div
      className={classNames("divider", className)}
      style={{ margin: marginProperty }}
    />
  );
};

export default Divider;
