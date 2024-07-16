import SkeletonElement from "@/components/SkeletonElement/SkeletonElement";
import "./productDetailsSkeleton.scss";

const ProductDetailsSkeleton = () => {
  return (
    <div className="product-details product-details-skeleton">
      <SkeletonElement className="product-details__image product-details-skeleton__image-skeleton" />
      <div className="product-details-skeleton__info-container">
        <SkeletonElement className="product-details-skeleton__info-skeleton info" />
        <SkeletonElement className="product-details-skeleton__info-skeleton info" />
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
