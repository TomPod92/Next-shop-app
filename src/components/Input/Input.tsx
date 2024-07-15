import classNames from "classnames";
import "./input.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

const Input = ({ label, className, ...rest }: Props) => {
  return (
    <div className={classNames("input-container", className)}>
      {label && <label>{label}</label>}
      <input {...rest} />
    </div>
  );
};

export default Input;
