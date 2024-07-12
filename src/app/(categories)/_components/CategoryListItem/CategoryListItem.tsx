import Link from "next/link";
import "./categoryListItem.scss";

interface Props {
  categoryName: string;
}

const CategoryListItem = ({ categoryName }: Props) => {
  return (
    <li className="category-list-item">
      <Link href={`/category/${categoryName}`}>{categoryName}</Link>
    </li>
  );
};

export default CategoryListItem;
