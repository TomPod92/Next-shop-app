import Link from "next/link";
import classNames from "classnames";
import "./appLink.scss";

interface Props {
  text: string;
  href: string;
  className?: string;
}

const AppLink = ({ text, href, className }: Props) => {
  return (
    <span className={classNames("app-link", className)}>
      <Link href={href}>{text}</Link>
    </span>
  );
};

export default AppLink;
