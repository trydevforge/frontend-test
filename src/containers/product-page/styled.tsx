import { Typography } from "@/app/ui";
import { Box, styled } from "@mui/material";

export const ActionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  gap: theme.spacing(2),
  position : 'sticky',
  right: 0,
  zIndex: 1,
}));

export const ProductListingContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));



// Styled Header Component
export const HeaderContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  textAlign: 'left',
  marginBottom: theme.spacing(2),
}));

export const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
}));

export const HeaderSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  marginTop: theme.spacing(1),
}));
