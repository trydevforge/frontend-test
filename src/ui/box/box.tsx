import styled from "@emotion/styled";
import { Box, BoxProps } from "@mui/material";

const Wrapper: React.FC<BoxProps> = ({
  children,
  ...props
}) => {
  return (
    <Box {...props}>
      {children}
    </Box>
  );
};

export default styled(Wrapper)(() => ({
}));