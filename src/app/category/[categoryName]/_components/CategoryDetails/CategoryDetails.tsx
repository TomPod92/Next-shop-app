"use client";

import Link from "next/link";
import { useCategoryProducts } from "../../_hooks/useGetCategoryProducts";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import "./categoryDetails.scss";

interface Props {
  categoryName: string;
}

const CategoryDetails = ({ categoryName }: Props) => {
  const { back } = useRouter();
  const {
    data: categoryDetails,
    isLoading,
    isError,
    error,
  } = useCategoryProducts({ categoryName });

  console.log("-->", categoryDetails);
  return (
    <div className="category-details">
      <div className="category-details__header">
        <h2 className="category-details__title">
          <span>Category:</span> {categoryName}
        </h2>
        <Button
          text="Go to category list"
          onClick={back}
          className="category-details__button"
        />
      </div>
    </div>
  );
};

export default CategoryDetails;
