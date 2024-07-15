import "./categoryPage.scss";
import CategoryDetails from "./_components/CategoryDetails/CategoryDetails";

interface Props {
  params: { categoryName: string };
}

const CategoryPage = ({ params }: Props) => {
  return <CategoryDetails categoryName={decodeURI(params.categoryName)} />;
};

export default CategoryPage;
