import Link from "next/link";
import "./appHeader.scss";

const AppHeader = () => {
  return (
    <header className="app-header">
      <h1>
        <Link href="/">Shop app</Link>
      </h1>
    </header>
  );
};

export default AppHeader;
