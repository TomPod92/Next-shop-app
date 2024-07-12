import AppLink from "../AppLink/AppLink";
import "./appHeader.scss";

const AppHeader = () => {
  return (
    <header className="app-header">
      <h1>
        <AppLink text="Shop app" href="/" />
      </h1>
    </header>
  );
};

export default AppHeader;
