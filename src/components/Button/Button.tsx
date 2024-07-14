import classNames from "classnames";
import "./button.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

const Button = ({ text, className, ...rest }: Props) => {
  return (
    <button className={classNames("button", className)} {...rest}>
      {text}
    </button>
  );
};

export default Button;
