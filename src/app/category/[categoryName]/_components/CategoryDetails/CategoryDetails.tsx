"use client";

import { useCategoryProducts } from "../../_hooks/useGetCategoryProducts";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import "./categoryDetails.scss";
import { useEffect } from "react";
import Divider from "@/components/Divider/Divider";
import NoDataInfo from "@/components/NoDataInfo/NoDataInfo";
import CategoryProduct from "../CategoryProduct/CategoryProduct";
import { Product } from "@/app/product/[productId]/_types";

const skeletonArray = Array.from(Array(5));

interface Props {
  categoryName: string;
}

const CategoryDetails = ({ categoryName }: Props) => {
  const { back } = useRouter();
  const {
    data: categoryProducts = [],
    isLoading,
    isError,
    error,
  } = useCategoryProducts({ categoryName });

  useEffect(() => {
    if (!isError) {
      return;
    }

    throw new Error(error.message);
  }, [isError, error]);

  useEffect(() => {
    console.log("isLoading", isLoading);
  }, [isLoading]);

  return (
    <div className="category-details">
      <div className="category-details__header">
        <h2 className="category-details__header-title">
          <span>Category:</span> {categoryName}
        </h2>
        <Button
          text="Go to category list"
          onClick={back}
          className="category-details__header-button"
        />
      </div>
      <Divider />
      <h2 className="category-details__product-list-header">Products:</h2>
      {!isLoading && !categoryProducts?.length && (
        <NoDataInfo info="No products to display :(" />
      )}
      <div className="category-details__product-list">
        {(isLoading ? skeletonArray : categoryProducts).map(
          (product: Product, index) => (
            <CategoryProduct
              key={index}
              product={product}
              isLoading={isLoading}
            />
          )
        )}
      </div>
    </div>
  );
};

export default CategoryDetails;
