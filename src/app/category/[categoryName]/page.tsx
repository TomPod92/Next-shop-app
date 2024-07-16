import { Metadata } from "next";
import CategoryDetails from "./_components/CategoryDetails/CategoryDetails";
import { capitalizeFirstLetter } from "@/utils/helpers";

interface Props {
  params: { categoryName: string };
}

export const generateMetadata = ({ params }: Props) => ({
  title: `${capitalizeFirstLetter(params.categoryName)} products`,
});

const CategoryPage = ({ params }: Props) => {
  return <CategoryDetails categoryName={decodeURI(params.categoryName)} />;
};

export default CategoryPage;
