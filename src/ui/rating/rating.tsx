import styled from "@emotion/styled";
import { Rating, RatingProps } from "@mui/material";

const Wrapper: React.FC<RatingProps> = ({
  ...props
}) => {
  return (
    <Rating {...props}/>
  );
};

export default styled(Wrapper)(() => ({
  
}));