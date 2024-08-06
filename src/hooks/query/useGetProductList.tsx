import { useMutation, useQuery } from "react-query";
import * as Constant from "../constants";
import { apiService } from "@/app/data/services";

interface ProductListProps {
  limit: number;
  skip: number;
  enabled: boolean;
}

export const useGetProductList = ({limit,skip,enabled}:ProductListProps) => {
  return useQuery(
    [Constant.GET_PRODUCT_LIST,limit,skip],
    async () => apiService.get(`/product?limit=${limit}&skip=${skip}`),{
      enabled : !!enabled,
    }
  );
};
