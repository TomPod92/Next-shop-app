import classNames from "classnames";
import "./noDataInfo.scss";

interface Props {
  info: string;
  className?: string;
}

const NoDataInfo = ({ info, className }: Props) => {
  return <p className={classNames("no-data-info", className)}>{info}</p>;
};

export default NoDataInfo;
