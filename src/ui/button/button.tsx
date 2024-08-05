import styled from "@emotion/styled";
import { Button, ButtonProps, } from "@mui/material";

const Wrapper: React.FC<ButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <Button variant='contained' disableElevation {...props}>
      {children}
    </Button>
  );
};

export default styled(Wrapper)(() => ({
  borderRadius: 5,
}));