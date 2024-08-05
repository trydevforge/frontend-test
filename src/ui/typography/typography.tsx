import styled from "@emotion/styled";
import { Typography, TypographyProps, } from "@mui/material";

const Wrapper: React.FC<TypographyProps> = ({
  children,
  ...props
}) => {
  return (
    <Typography variant="body1" {...props}>
      {children}
    </Typography>
  );
};

export default styled(Wrapper)(() => ({
}));