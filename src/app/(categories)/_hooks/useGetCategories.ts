import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { baseApiUrl } from "@/utils/constants";
import { QueryKeys } from "@/utils/queryKeys";

const getCategories = async (): Promise<string[]> => {
  try {
    const data = await axios.get(`${baseApiUrl}/products/categories`);

    return data.data;
  } catch (error) {
    throw new Error("An error occured while loading categories :(");
  }
};

interface Props {
  enabled?: boolean;
}

export const useCategories = ({ enabled = true }: Props) => {
  return useQuery({
    queryKey: [QueryKeys.Categories],
    queryFn: () => getCategories(),
    enabled,
  });
};
