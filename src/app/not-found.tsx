import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <span className="not-found-page__code">404</span>
      <p className="not-found-page__text">Page not found :(</p>
      <span className="not-found-page__link">
        <Link href="/">Go to home page</Link>
      </span>
    </div>
  );
};

export default NotFound;
