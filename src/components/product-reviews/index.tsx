import { Review } from "@/app/data/Product/type";
import { Modal, Rating, Typography } from "@/app/ui";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import {
  ReviewsContainer,
  ReviewItem,
  ReviewerInfo,
  RatingContainer,
} from "./styled";
import { Divider, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export const ProductReviews = NiceModal.create(({ row }: { row: Review[] }) => {
  const { hide, visible } = useModal();
  return (
    <Modal onClose={hide} open={visible} >
      
      <>
      <IconButton
          aria-label="close"
          onClick={hide}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      <ReviewsContainer>
        <Typography variant="h4">Product Reviews</Typography>
        <Divider sx={{
          my: 2,
        }} />
          {row.map((review, index) => (
            <ReviewItem key={index}>
              <RatingContainer>
                <Rating value={review.rating} readOnly precision={0.5} />
                <Typography variant="subtitle1">{review.rating.toFixed(2)}</Typography>
              </RatingContainer>
              <Typography variant="body1">{review.comment}</Typography>
              <ReviewerInfo>
                <Typography variant="body2">{review.reviewerName}</Typography>
                <Typography variant="body2">{review.reviewerEmail}</Typography>
                <Typography variant="body2">{new Date(review.date).toLocaleDateString()}</Typography>
              </ReviewerInfo>
            </ReviewItem>
          ))}
      </ReviewsContainer></>
    </Modal>
  );
});
