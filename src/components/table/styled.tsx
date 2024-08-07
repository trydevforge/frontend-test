import { Box } from "@/app/ui";
import { styled, TableCell } from "@mui/material";

export const TableContainer = styled(Box)(({ theme }) => ({
  overflowX: 'auto', // Enables horizontal scrolling
  maxHeight: 'calc(100vh - 200px)', // Optional: Set a max height for vertical scrolling if needed
  overflowY: 'auto', // Enables vertical scrolling if content exceeds max height
  padding: theme.spacing(2), // Adds some padding (adjust as necessary)
}));

export const StickyTableCell = styled(TableCell)(({ theme }) => ({
  position: "sticky",
  right: `-1em`,
  background: "white"
}));