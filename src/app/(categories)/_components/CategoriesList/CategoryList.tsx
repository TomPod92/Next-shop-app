"use client";

import { useCategories } from "../../_hooks/useGetCategories";
import CategoryListItem from "../CategoryListItem/CategoryListItem";
import "./categoryList.scss";

const CategoryList = () => {
  const { data: categories = [], isLoading, isError } = useCategories({});

  return (
    <ul className="category-list">
      {categories.map((category: string) => (
        <CategoryListItem key={category} categoryName={category} />
      ))}
    </ul>
  );
};

export default CategoryList;
