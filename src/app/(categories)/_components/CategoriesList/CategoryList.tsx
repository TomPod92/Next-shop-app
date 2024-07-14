"use client";

import SkeletonElement from "@/components/SkeletonElement/SkeletonElement";
import { useCategories } from "../../_hooks/useGetCategories";
import CategoryListItem from "../CategoryListItem/CategoryListItem";
import "./categoryList.scss";
import NoDataInfo from "@/components/NoDataInfo/NoDataInfo";

const skeletonArray = Array.from(Array(10));

const CategoryList = () => {
  const { data: categories = [], isLoading, isError } = useCategories({});

  if (!isLoading && !categories.length) {
    return <NoDataInfo info="No categories to display :(" />;
  }

  return (
    <ul className="category-list">
      {(isLoading ? skeletonArray : categories).map(
        (category: string, index: number) => (
          <CategoryListItem
            key={category || index}
            categoryName={category}
            isLoading={isLoading}
          />
        )
      )}
    </ul>
  );
};

export default CategoryList;
