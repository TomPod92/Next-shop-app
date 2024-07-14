import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { baseApiUrl } from "@/utils/constants";
import { QueryKeys } from "@/utils/queryKeys";

const getCategories = async (): Promise<string[]> => {
  try {
    const data = await axios.get(`${baseApiUrl}/products/categoriess`);

    console.log("data", data);
    console.log("data", data.data);
    console.log("-----------------");

    return data.data || [];
  } catch (error) {
    console.log("error");
    throw new Error("error");
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
