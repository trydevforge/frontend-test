// ProductReviews.styles.ts
import { Box, Typography } from '@/app/ui';
import box from '@/app/ui/box/box';
import styled from 'styled-components';

// export const ReviewsContainer = styled(Box)`
//   padding: 20px;
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
// `;

// export const ReviewItem = styled(Typography)`
//   list-style: none;
//   margin-bottom: 15px;
//   padding: 10px;
//   border-bottom: 1px solid #eaeaea;

//   &:last-child {
//     border-bottom: none;
//   }
// `;

// export const ReviewerInfo = styled(Box)`
//   margin-top: 5px;
//   font-size: 0.9rem;
//   color: #666;
// `;

// export const RatinfgContainer = styled(Box)``

export const ReviewsContainer = styled(Box)(() => ({
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
}));

export const ReviewItem = styled(Typography)(() => ({
  listStyle: 'none',
  marginBottom: '15px',
  padding: '10px',
  borderBottom: `1px solid #eaeaea`,
  '&:last-child': {
    borderBottom: 'none',
  },
}));

export const ReviewerInfo = styled(Box)(() => ({
  marginTop: '5px',
  fontSize: '0.9rem',
  color: '#666',
}));

export const RatingContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap : '5px',
  
}));