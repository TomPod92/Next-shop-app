"use client";

import { useEffect } from "react";
import { useGetProduct } from "../../_hooks/useGetProduct";
import "./productDetails.scss";
import Info from "../Info/Info";
import NoDataInfo from "@/components/NoDataInfo/NoDataInfo";

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

  return (
    <div className="product-details">
      <img className="product-details__image" src={productDetails?.image} />
      <div className="product-details__info-container">
        <Info label="Title" value={productDetails?.title} />
        <Info label="Category" value={productDetails?.category} />
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
