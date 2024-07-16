import Link from "next/link";
import SkeletonElement from "@/components/SkeletonElement/SkeletonElement";
import "./categoryListItem.scss";

interface Props {
  categoryName: string;
  isLoading?: boolean;
}

const CategoryListItem = ({ categoryName, isLoading }: Props) => {
  return (
    <li className="category-list-item">
      {isLoading ? (
        <SkeletonElement />
      ) : (
        <Link href={`/category/${categoryName}`}>{categoryName}</Link>
      )}
    </li>
  );
};

export default CategoryListItem;
