"use client";

import { useEffect } from "react";
import Link from "next/link";
import NoDataInfo from "@/components/NoDataInfo/NoDataInfo";
import ProductDetailsSkeleton from "../ProductDetailsSkeleton/ProductDetailsSkeleton";
import { useGetProduct } from "../../_hooks/useGetProduct";
import Info from "../Info/Info";
import "./productDetails.scss";

interface Props {
  productId: string;
}

const ProductDetails = ({ productId }: Props) => {
  const {
    data: productDetails,
    isLoading,
    isError,
    error,
  } = useGetProduct({ productId });

  const ratingInfo = productDetails?.rating
    ? `${productDetails?.rating.rate} ( ${productDetails?.rating.count} customers )`
    : "";

  useEffect(() => {
    if (!isError) {
      return;
    }

    throw new Error(error.message);
  }, [isError, error]);

  if (!isLoading && !productDetails) {
    return (
      <NoDataInfo info="Could not find any information about a product you are looking for" />
    );
  }

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  return (
    <div className="product-details">
      <img className="product-details__image" src={productDetails?.image} />
      <div className="product-details__info-container">
        <Info label="Title" value={productDetails?.title} />
        {productDetails?.category && (
          <Info
            label="Category"
            className="category-info"
            value={
              <Link href={`/category/${productDetails.category}`}>
                {productDetails?.category}
              </Link>
            }
          />
        )}
        <Info label="Price" value={productDetails?.price} />
        <Info label="Rating" value={ratingInfo} />
        <Info
          label="Description"
          value={productDetails?.description}
          className="description-info"
        />
      </div>
    </div>
  );
};

export default ProductDetails;
