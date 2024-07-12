"use client";

import SkeletonElement from "@/components/SkeletonElement/SkeletonElement";
import { useCategories } from "../../_hooks/useGetCategories";
import CategoryListItem from "../CategoryListItem/CategoryListItem";
import "./categoryList.scss";

const skeletonArray = Array.from(Array(10));

const CategoryList = () => {
  const { data: categories = [], isLoading, isError } = useCategories({});

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
