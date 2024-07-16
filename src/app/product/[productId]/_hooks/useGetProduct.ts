import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseApiUrl } from "@/utils/constants";
import { QueryKeys } from "@/utils/queryKeys";
import { Product } from "@/app/product/[productId]/_types";

const getProduct = async (productId: string): Promise<Product> => {
  try {
    const data = await axios.get(`${baseApiUrl}/products/${productId}`);

    return data.data;
  } catch (error) {
    throw new Error("An error occured while loading product :(");
  }
};

interface Props {
  productId: string;
  enabled?: boolean;
}

export const useGetProduct = ({ productId, enabled = true }: Props) => {
  return useQuery({
    queryKey: [QueryKeys.Product, productId],
    queryFn: () => getProduct(productId),
    enabled: !!productId && enabled,
  });
};
