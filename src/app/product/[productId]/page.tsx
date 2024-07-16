import "./productPage.scss";
import ProductDetails from "./_components/ProductDetails/ProductDetails";

interface Props {
  params: { productId: string };
}

const ProductPage = ({ params }: Props) => {
  return <ProductDetails productId={params.productId} />;
};

export default ProductPage;
