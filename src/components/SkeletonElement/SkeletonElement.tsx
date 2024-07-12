import classNames from "classnames";
import "./skeletonElement.scss";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const SkeletonElement = ({ className }: Props) => {
  return (
    <div className={classNames("skeleton-element", className)}>
      <div className="skeleton-element-shimmer"></div>
    </div>
  );
};

export default SkeletonElement;
