import classNames from "classnames";
import "./info.scss";

interface Props {
  label: string;
  value?: string | number;
  className?: string;
}

const Info = ({ label, value, className }: Props) => {
  if (!value) {
    return null;
  }

  return (
    <p className={classNames("info", className)}>
      <span className="info__label">{label}:</span>
      <span className="info__value">{value}</span>
    </p>
  );
};

export default Info;
