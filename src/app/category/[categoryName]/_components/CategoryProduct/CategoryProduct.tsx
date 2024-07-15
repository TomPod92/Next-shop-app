import { Product } from "@/app/product/[productId]/_types";
import SkeletonElement from "@/components/SkeletonElement/SkeletonElement";
import "./categoryProduct.scss";
import TextWithClamp from "@/components/TextWithClamp/TextWithClamp";
import { useRouter } from "next/navigation";

interface Props {
  product?: Product;
  isLoading?: boolean;
}

const CategoryProduct = ({ product, isLoading }: Props) => {
  const { push } = useRouter();
  if (isLoading) {
    return <SkeletonElement className="category-product" />;
  }

  return (
    <div
      className="category-product category-product--with-hover"
      style={{ background: "white" }}
      onClick={() => push(`/product/${product?.id}`)}
    >
      <img className="category-product__image" src={product?.image} />
      <TextWithClamp
        text={product?.title || ""}
        lines={3}
        tag="h2"
        className="category-product__title"
      />
      <p className="category-product__price">{product?.price}</p>
    </div>
  );
};

export default CategoryProduct;
