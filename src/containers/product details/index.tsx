import { Typography, Button, Breadcrumbs } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  Container,
  ContentContainer,
  Description,
  Price,
  RatingUi,
  Review,
  ReviewComment,
  ReviewRating,
  ReviewsSection,
  StockStatus,
  StyledImage,
  Title,
  ImageContainer,
  QuantityContainer,
  QuantityButton,
  QuantityInput,
  BreadcrumbsStyled,
} from "./styled";
import { Product } from "@/app/data";
import Link from "next/link";

// server side props
interface ProductDetailProps {
  data: Product;
}

export const ProductDetailContainer: React.FC<ProductDetailProps> = ({
  data,
}) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  if (!data) return <Typography variant="h6">Product not found</Typography>;

  const {
    title,
    description,
    price,
    rating,
    stock,
    images,
    availabilityStatus,
    reviews,
  } = data;

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleAddToCart = () => {
    // Add your cart logic here
    console.log(`Added ${quantity} of ${title} to cart`);
  };

  return (
    <>
      <BreadcrumbsStyled aria-label="breadcrumb">
        <Link href={"/products"}>Products Listing</Link>
        <Typography color="text.primary">{title}</Typography>
      </BreadcrumbsStyled>
      <Container>
        <ImageContainer>
          <StyledImage src={images[0]} alt={title} />
   
        </ImageContainer>
        <ContentContainer>
          <Title variant="h1">{title}</Title>
          <Price variant="h2">${price.toFixed(2)}</Price>
          <RatingUi value={rating} readOnly precision={0.5} />
          <StockStatus>{availabilityStatus}</StockStatus>
          <Description>{description}</Description>

          {/* Quantity Control */}
          <QuantityContainer>
            <QuantityButton onClick={handleDecrease}>-</QuantityButton>
            <QuantityInput type="number" value={quantity} readOnly />
            <QuantityButton onClick={handleIncrease}>+</QuantityButton>
          </QuantityContainer>

          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>

          <ReviewsSection>
            <Typography variant="h5">Reviews</Typography>
            {reviews?.map((review, index) => (
              <Review key={index}>
                <ReviewRating>Rating: {review.rating} ⭐</ReviewRating>
                <ReviewComment>{review.comment}</ReviewComment>
              </Review>
            ))}
          </ReviewsSection>
        </ContentContainer>
      </Container>
    </>
  );
};
