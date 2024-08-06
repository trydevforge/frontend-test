import { styled } from "@mui/material";
import { Box } from "../ui";

export const ErrorBoundaryContainer = styled(Box)(() => ({
  textAlign: "center" as const,
  padding: "20px",
  backgroundColor: "#f8d7da",
  color: "#721c24",
  border: "1px solid #f5c6cb",
  borderRadius: "4px",
  marginTop: "50px",
}));

export const ErrorBoundaryTitle = styled("h2")(() => ({
  fontSize: "24px",
  marginBottom: "10px",
}));
