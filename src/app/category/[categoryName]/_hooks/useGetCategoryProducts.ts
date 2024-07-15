import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseApiUrl } from "@/utils/constants";
import { QueryKeys } from "@/utils/queryKeys";
import { Product } from "@/app/product/[productId]/_types";

const getCategoryProducts = async (
  categoryName: string
): Promise<Product[]> => {
  try {
    const data = await axios.get(
      `${baseApiUrl}/products/category/${categoryName}`
    );

    return data.data;
  } catch (error) {
    throw new Error("An error occured while loading category products :(");
  }
};

interface Props {
  categoryName: string;
  enabled?: boolean;
}

export const useCategoryProducts = ({
  categoryName,
  enabled = true,
}: Props) => {
  return useQuery({
    queryKey: [QueryKeys.Category],
    queryFn: () => getCategoryProducts(categoryName),
    enabled: !!categoryName && enabled,
  });
};
