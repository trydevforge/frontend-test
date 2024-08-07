import { useMutation, useQuery } from "react-query";
import * as Constant from "../constants";
import { apiService } from "@/app/data/services";
import { Product } from "@/app/data";

interface ProductListProps {
  id: string;
}

export const useGetProductDetail = ({ id }: ProductListProps) => {
  return useQuery([Constant.GET_PRODUCT_DETAIL, id], async ():Promise<Product> =>
    apiService.get(`/product/${id}`),{
      enabled: !!id,
    }
  );
};
