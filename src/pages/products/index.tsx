import { ProductListingContainer } from "@/app/containers/product-page";
import { apiService } from "@/app/data/services";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const limit = 10;
  const skip = 0;
  const res = await apiService.get(`/product?limit=${limit}&skip=${skip}`);
  
  return {
    props: {
      data: res || null,
    },
  };
};

export default ProductListingContainer;
