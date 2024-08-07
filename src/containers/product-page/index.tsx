import React, { useState } from "react";
import { Box } from "@mui/material";
import { ProductReviews, TableUI } from "@/app/components";
import { Product } from "@/app/data";
import { ProductListEntity } from "@/app/dto/product-list/dataGridEntity";
import { useGetProductList } from "@/app/hooks/query";
import { Button } from "@/app/ui";
import NiceModal from "@ebay/nice-modal-react";
import { ColumnDef } from "@tanstack/react-table";
import { useRouter } from "next/router";
import { ActionsContainer } from "./styled";
import { BreadcrumbsStyled } from "../product details/styled";
import Typography from "@/app/ui/typography/typography";

//server side props
type ProductListProps = {
  data: {
    products: Product[];
    total: number;
    limit: number;
  };
};

export const ProductListingContainer: React.FC<ProductListProps> = ({
  data: { limit, products, total },
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageLimit = 10;
  const { data, isLoading } = useGetProductList({
    limit: pageLimit,
    skip: (currentPage - 1) * pageLimit,
    enabled: currentPage > 1,
  });

  const router = useRouter();
  const dataGridEntity = new ProductListEntity(
    data?.products || products,
    data?.total || total,
    data?.limit || limit
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const pageCount = dataGridEntity.total / pageLimit;

  const columns: ColumnDef<any>[] = [
    ...dataGridEntity.columns,
    {
      header: "Actions",
      cell: (props) => (
        <ActionsContainer>
          <Button
            onClick={() =>
              NiceModal.show(ProductReviews, {
                row: props.row.original?.reviews,
              })
            }
            variant="outlined"
          >
            View Review
          </Button>
          <Button
            onClick={() => router.push(`/products/${props.row.original.id}`)}
          >
            Details
          </Button>
        </ActionsContainer>
      ),
      size: 250,
      enablePinning: true,
      enableResizing: true,

    },
  ];

  return (
    <>
      <TableUI
        headerComponent={(
          <BreadcrumbsStyled aria-label="breadcrumb">
            <Typography color="text.primary">Product Listing</Typography>
          </BreadcrumbsStyled>
        )}
        columns={columns}
        data={dataGridEntity.rows}
        isFetching={isLoading}
        EmptyText="No data found"
        pageCount={Math.ceil(pageCount)}
        page={handlePageChange}
      />
    </>
  );
};
