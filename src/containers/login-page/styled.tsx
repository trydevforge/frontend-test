import { Box, Input } from "@/app/ui";
import { styled } from "@mui/material";

export const LoginPageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100vw", // Full width for responsiveness
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  "& .form": {
    display: "flex",
    flexDirection: "column",
    gap : theme.spacing(2), // Spacing between inputs
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.background.paper, // Card-like background
    boxShadow: theme.shadows[5],
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(4), // Padding for spacing
    width: '100%', // Ensure it takes full width on small screens
    maxWidth: '400px', // Limit the width for larger screens
    '& h1': {
      marginBottom: theme.spacing(2),
      fontSize: theme.typography.h4.fontSize, // Header size
    },
    "& .form__custom-button": {
      marginTop: theme.spacing(2),
      width: '100%', // Full-width button
    },
    "& input": {
      marginBottom: theme.spacing(2), // Spacing between inputs
      width: '100%', // Full-width inputs
    }
  }
}));

