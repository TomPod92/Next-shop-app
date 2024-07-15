import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface Props<T> {
  items?: T[];
  resultsPerPage: number;
}

const usePagination = <T>({ items = [], resultsPerPage }: Props<T>) => {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "0");

  const paginatedItems = items.slice(
    page * resultsPerPage,
    (page + 1) * resultsPerPage
  );
  const previousButtonDisabled = page === 0;
  const nextButtonDisabled = items.length <= (page + 1) * resultsPerPage;

  const invalidPageNumber = items.length
    ? isNaN(page) ||
      Math.ceil(items.length / resultsPerPage) - 1 < page ||
      page < 0
    : false;

  const goToPreviousPage = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", (page - 1).toString());
    history.replaceState(null, "", "?" + params.toString());
    // router.replace(`${pathname}?${params.toString()}`);
  };

  const goToNextPage = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", (page + 1).toString());
    history.replaceState(null, "", "?" + params.toString());
    // router.replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.delete("page");
    history.replaceState(null, "", "?" + params.toString());
  }, [items]);

  return {
    paginatedItems,
    previousButtonDisabled,
    nextButtonDisabled,
    invalidPageNumber,
    goToPreviousPage,
    goToNextPage,
  };
};

export default usePagination;
