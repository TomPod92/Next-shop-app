"use client";

import Input from "@/components/Input/Input";
import { useCategories } from "../../_hooks/useGetCategories";
import CategoryListItem from "../CategoryListItem/CategoryListItem";
import "./categoryList.scss";
import NoDataInfo from "@/components/NoDataInfo/NoDataInfo";
import { ChangeEvent, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import useDebounceValue from "@/hooks/useDebounceValue";
import usePagination from "@/hooks/usePagination";
import Button from "@/components/Button/Button";

const skeletonArray = Array.from(Array(10));

const CategoryList = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm") || "";

  const debouncedSearchTerm = useDebounceValue(searchTerm);

  const {
    data: categories = [],
    isLoading,
    isError,
    error,
  } = useCategories({});

  const filteredCategories = useMemo(() => {
    return searchTerm.length
      ? categories.filter((category) =>
          category
            .toLocaleLowerCase()
            .includes(searchTerm.trim().toLocaleLowerCase())
        )
      : categories;
  }, [debouncedSearchTerm, categories]);

  const {
    paginatedItems: categoriesToDisplay,
    previousButtonDisabled,
    nextButtonDisabled,
    invalidPageNumber,
    goToPreviousPage,
    goToNextPage,
  } = usePagination({ items: filteredCategories, resultsPerPage: 25 });

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set("searchTerm", searchTerm);
    } else {
      params.delete("searchTerm");
    }

    history.replaceState(null, "", "?" + params.toString());
    // router.replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    if (!invalidPageNumber && !isError) {
      return;
    }
    throw new Error(invalidPageNumber ? "Invalid page number" : error?.message);
  }, [invalidPageNumber, isError, error]);

  return (
    <>
      <div className="list-navigation">
        <Input
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search term"
          type="search"
          className="list-navigation__input"
        />
        <Button
          text="Prev"
          onClick={goToPreviousPage}
          disabled={previousButtonDisabled}
          className="list-navigation__button"
        />
        <Button
          text="Next"
          onClick={goToNextPage}
          disabled={nextButtonDisabled}
          className="list-navigation__button"
        />
      </div>
      {!isLoading && !filteredCategories.length && (
        <NoDataInfo info="No categories to display :(" />
      )}
      <ul className="category-list">
        {(isLoading ? skeletonArray : categoriesToDisplay).map(
          (category: string, index: number) => (
            <CategoryListItem
              key={category || index}
              categoryName={category}
              isLoading={isLoading}
            />
          )
        )}
      </ul>
    </>
  );
};

export default CategoryList;
