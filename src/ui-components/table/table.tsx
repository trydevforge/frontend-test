import {
  Box,
  Paper,
  Skeleton,
  Table as MuiTable,
  TableHead,
  TableCell,
  TableBody,
  Pagination,
  styled,
  TableRow,
} from "@mui/material";
import {
  Cell,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { ChangeEvent, FC, memo, ReactElement, useMemo, useState } from "react";
import { TableContainer } from "./styled";

// Styles with styled-component
export const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: #f1f1f1;
  }
  &:last-child td,
  &:last-child th {
    border: 0;
  }
  :hover {
    background-color: #d9d9d9;
  }
`;

export const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

// Typescript interface
interface TableProps {
  data: any[];
  columns: ColumnDef<any>[];
  isFetching?: boolean;
  skeletonCount?: number;
  skeletonHeight?: number;
  headerComponent?: JSX.Element;
  pageCount?: number;
  page?: (page: number) => void;
  onClickRow?: (cell: Cell<any, unknown>, row: Row<any>) => void;
  searchLabel?: string;
  EmptyText?: string;
  children?: React.ReactNode | React.ReactElement;
  handleRow?: () => void;
}

// The main table
export const TableUI: FC<TableProps> = ({
  data,
  columns,
  isFetching,
  skeletonCount = 10,
  skeletonHeight = 28,
  headerComponent,
  pageCount,
  onClickRow,
  page,
  EmptyText,
  handleRow,
}) => {
  const [paginationPage, setPaginationPage] = useState(1);
  const [globalFilter, setGlobalFilter] = useState("");
  const memoizedData = useMemo(() => data, [data]);
  const memoizedColumns = useMemo(() => columns, [columns]);
  const [sorting, setSorting] = useState<SortingState>([]);

  // Initialize the table
  const { getHeaderGroups, getRowModel, getAllColumns } = useReactTable({
    data: memoizedData,
    columns: memoizedColumns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount,
    state: {
      globalFilter,
      sorting,
    },
    globalFilterFn: (row, columnId, filterValue) => {
      // Implement a simple search matching
      const cellValue = String(row.getValue(columnId)).toLowerCase();
      return cellValue.includes(filterValue.toLowerCase());
    },
    onGlobalFilterChange: setGlobalFilter,
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
  });

  const skeletons = Array.from({ length: skeletonCount }, (x, i) => i);
  const columnCount = getAllColumns().length;
  const noDataFound = !isFetching && (!memoizedData || memoizedData.length === 0);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    setGlobalFilter(value); // Update the global filter based on input
  };

  const handlePageChange = (event: ChangeEvent<unknown>, currentPage: number) => {
    setPaginationPage(currentPage === 0 ? 1 : currentPage);
    page?.(currentPage === 0 ? 1 : currentPage);
  };

  return (
    <Paper elevation={2} sx={{ padding: "1rem" }}>
      <Box paddingX="1rem">
        {headerComponent && <Box>{headerComponent}</Box>}
      </Box>

      <TableContainer style={{ overflowX: "auto" }}>
        <MuiTable>
          {!isFetching && (
       <TableHead>
       {getHeaderGroups().map((headerGroup) => (
         <TableRow key={headerGroup.id} className="bg-[#000]">
           {headerGroup.headers.map((header) => (
             <TableCell
               key={header.id}
               className="text-white text-sm font-cambon"
               onClick={header.column.getToggleSortingHandler()} // Handle sorting toggle on header click
               style={{
                 cursor: "pointer", // Indicate that the header is clickable
                 border: "1px solid #e0e0e0", // Add border to the header cells
               }}
             >
               {header.isPlaceholder
                 ? null
                 : (
                   <>
                     {flexRender(
                       header.column.columnDef.header,
                       header.getContext()
                     )}
                     {header.column.getIsSorted() === 'asc'
                       ? ' 🔼' // Up arrow for ascending
                       : header.column.getIsSorted() === 'desc'
                         ? ' 🔽' // Down arrow for descending
                         : ''}
                   </>
                 )}
             </TableCell>
           ))}
         </TableRow>
       ))}
     </TableHead>
          )}
          <TableBody>
            {!isFetching ? (
              getRowModel()?.rows.map((row) => (
                <StyledTableRow key={row.id} onClick={handleRow}>
                 {row.getVisibleCells().map((cell, index) => (
                    <TableCell
                      onClick={() => onClickRow?.(cell, row)}
                      key={cell.id}
                      className="text-[#2E353A] text-base font-graphik"
                      style={{
                        borderRight: index < row.getVisibleCells().length - 1 ? "1px solid #e0e0e0" : undefined,
                      }}
                    >
                      <Box sx={{
                        width : cell.column.columnDef.size,
                      }}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </Box>
                      {/* {cell.column.columnDef.size} */}
                    </TableCell>
                  ))}
                </StyledTableRow>
              ))
            ) : (
              <>
                {skeletons.map((skeleton) => (
                  <TableRow key={skeleton}>
                    {Array.from({ length: columnCount }, (x, i) => i).map((elm) => (
                      <TableCell key={elm}>
                        <Skeleton height={skeletonHeight} width={200}/>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </MuiTable>
      </TableContainer>
      {noDataFound && (
        <Box my={2} textAlign="center">
          {EmptyText}
        </Box>
      )}
      {pageCount && page && (
        <StyledPagination
          count={pageCount}
          page={paginationPage}
          onChange={handlePageChange}
          color="primary"
          showFirstButton
          showLastButton
        />
      )}
    </Paper>
  );
};

export default memo(TableUI);
