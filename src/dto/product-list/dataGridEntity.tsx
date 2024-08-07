import { ProductFromApi } from "@/app/data/Product/type";import { Box, Button, Chip, Rating, Typography } from "@/app/ui";
import { ColumnDef } from "@tanstack/react-table";

export class ProductListEntity {
  columns: ColumnDef<any>[];
  rows: any[];
  total: number;
  limit: number;

  constructor(data: ProductFromApi[], total: number, limit: number) {
    this.columns = [
      {
        accessorKey: "id",
        header: "ID",
        filterFn: "equals",
        accessorFn: (row) => row.id,
        size: 50,
      },
      {
        accessorKey: "title",
        header: "Title",
        filterFn: "equals",
        accessorFn: (row) => row.title,
        size: 200,
        cell(props) {
          return (
            <Typography
            variant="body1"
            color={"primary"}
            sx={{ cursor: "pointer" }}
              onClick={() =>
              window.location.href = `/products/${props.row.original.id}`
              }
            >
              {props.cell.getValue() as string}
            </Typography>
          );
        }
      },
      {
        accessorKey: "description",
        header: "Description",
        accessorFn: (row) => row.description.substring(0, 50),
        size: 400,     },
      {
        accessorKey: "category",
        header: "Category",
        size: 100,
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 50
      },
      {
        accessorKey: "discountPercentage",
        header: "Discount Percentage",
        size: 150,
      },
      {
        accessorKey: "rating",
        header: "Rating",
        cell(props) {
          return (
            <Rating
              value={props.cell.getValue() as number}
              name="half-rating"
              precision={0.5}
              readOnly
           />
          );
        },
      },
      {
        accessorKey: "stock",
        header: "Stock",
        size: 50,
      },
      {
        accessorKey: "tags",
        header: "Tags",
        cell(props) {
          return (
            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 0.5,
            }}>
              {(props.cell.getValue() as string[]).map((tag, index) => (
                <Chip key={index} label={tag}  />
              ))}
            </Box>
          );
        },
        size: 300
      },
      {
        accessorKey: "brand",
        header: "Brand",
      },

    ];
    this.rows = data?.map((product, index) => ({
      ...product,
      index: index + 1,
    }));
    this.total = total;
    this.limit = limit;
  }
}
