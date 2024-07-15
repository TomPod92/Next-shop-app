"use client";

import Input from "@/components/Input/Input";
import { useCategories } from "../../_hooks/useGetCategories";
import CategoryListItem from "../CategoryListItem/CategoryListItem";
import "./categoryList.scss";
import NoDataInfo from "@/components/NoDataInfo/NoDataInfo";
import { ChangeEvent, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import useDebounceValue from "@/hooks/useDebounceValue";

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

  const filteredCategories = useMemo(() => {
    return searchTerm.length
      ? categories.filter((category) =>
          category
            .toLocaleLowerCase()
            .includes(searchTerm.trim().toLocaleLowerCase())
        )
      : categories;
  }, [debouncedSearchTerm, categories]);

  if (isError) {
    throw new Error(error.message);
  }

  return (
    <>
      <Input
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search term"
        type="search"
      />
      {!isLoading && !filteredCategories.length && (
        <NoDataInfo info="No categories to display :(" />
      )}
      <ul className="category-list">
        {(isLoading ? skeletonArray : filteredCategories).map(
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
