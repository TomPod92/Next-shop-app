import ProductDetails from "./_components/ProductDetails/ProductDetails";
import "./productPage.scss";

export const metadata = {
  title: "Product details page",
};

interface Props {
  params: { productId: string };
}

const ProductPage = ({ params }: Props) => {
  return <ProductDetails productId={params.productId} />;
};

export default ProductPage;
