import { ProductDetailContainer } from '@/app/containers/product details';
import { apiService } from '@/app/data/services';
import { GetServerSideProps } from 'next';


export const getServerSideProps : GetServerSideProps = async (context) => {
  const id = context?.params?.id as string;
  const res = await apiService.get(`/product/${id}`);

  return {
    props: {
      data: res || null,
    },
  };
}


export default ProductDetailContainer 