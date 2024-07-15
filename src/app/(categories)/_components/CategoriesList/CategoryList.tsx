"use client";

import Input from "@/components/Input/Input";
import { useCategories } from "../../_hooks/useGetCategories";
import CategoryListItem from "../CategoryListItem/CategoryListItem";
import "./categoryList.scss";
import NoDataInfo from "@/components/NoDataInfo/NoDataInfo";
import { ChangeEvent, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const skeletonArray = Array.from(Array(10));

const CategoryList = () => {
  // const searchParams = useSearchParams();
  // const searchTerm = searchParams.get("search") || "";
  // const pathname = usePathname();
  // const router = useRouter();

  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: categories = [],
    isLoading,
    isError,
    error,
  } = useCategories({});

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log("e", e.target.value);

    setSearchTerm(e.target.value);

    // const encodedSearch = encodeURI(e.target.value);

    // router.replace(`/?search=${encodedSearch}`);

    // const params = new URLSearchParams(searchParams.toString());
    // params.set("search", e.target.value);

    // router.push(`${pathname}?search=${e.target.value}`);
    // router.push(`${pathname}${searchTerm ? `?search=${e.target.value}` : ""}`);
  };

  const filteredCategories = useMemo(() => {
    return searchTerm.length
      ? categories.filter((category) =>
          category
            .toLocaleLowerCase()
            .includes(searchTerm.trim().toLocaleLowerCase())
        )
      : categories;
  }, [searchTerm, categories]);

  if (isError) {
    throw new Error(error.message);
  }

  // if (!isLoading && !filteredCategories.length) {
  //   return <NoDataInfo info="No categories to display :(" />;
  // }

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
