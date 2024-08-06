import styled from "@emotion/styled";
import { Chip, ChipProps } from "@mui/material";

const Wrapper: React.FC<ChipProps> = ({
  children,
  ...props
}) => {
  return (
    <Chip {...props}>
      {children}
    </Chip>
  );
};

export default styled(Wrapper)(() => ({
  
}));