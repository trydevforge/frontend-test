import { Box, Button, Rating, Typography } from "@/app/ui";
import { Breadcrumbs, styled } from "@mui/material";

// Container styles
export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  maxWidth: '1200px',
  margin: 'auto',
  padding: theme.spacing(2),
  gap: theme.spacing(4),
  alignItems: 'center', // Center items vertically
}));

export const ImageContainer = styled(Box)({
  flex: '1 1 60%',
  borderRadius: '12px',
  overflow: 'hidden',
});

export const StyledImage = styled('img')({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  borderRadius: '12px',
  maxHeight: '600px',
});

export const ContentContainer = styled(Box)(({ theme }) => ({
  flex: '1 1 40%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', // Center content vertically
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: theme.spacing(3),
  boxShadow: theme.shadows[3],
  transition: '0.3s',
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2.5em',
  marginBottom: theme.spacing(1),
  color: '#333',
  fontWeight: '600',
}));

export const Price = styled(Typography)(({ theme }) => ({
  fontSize: '1.8em',
  color: '#e91e63',
  margin: theme.spacing(1, 0),
}));

export const Description = styled(Typography)(({ theme }) => ({
  fontSize: '1em',
  color: '#555',
  margin: theme.spacing(2, 0),
}));

export const RatingUi = styled(Rating)(() => ({
  fontSize: '1.5em',
  color: '#ff9800',
  margin: '10px 0',
}));

export const StockStatus = styled(Typography)(() => ({
  fontSize: '1em',
  color: 'green',
  fontWeight: '500',
}));

export const ReviewsSection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  width: '100%',
}));

export const Review = styled(Box)(({ theme }) => ({
  backgroundColor: '#f9f9f9',
  borderRadius: '5px',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  boxShadow: theme.shadows[1],
}));

export const ReviewRating = styled(Typography)(() => ({
  fontWeight: 'bold',
  color: '#ff9800',
}));

export const ReviewComment = styled(Typography)(() => ({
  color: '#555',
}));

export const QuantityContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  margin: "20px 0",
}));

export const QuantityButton = styled(Button)(({ theme }) => ({
  width: '40px',
  height: '40px',
  fontSize: '1.5em',
  margin: theme.spacing(0, 1),
}));

export const QuantityInput = styled('input')({
  width: '60px',
  height: '40px',
  textAlign: 'center',
  fontSize: '1.5em',
  border: '1px solid #ccc',
  borderRadius: '4px',
});

export const BreadcrumbsStyled = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(2, 0),
}));