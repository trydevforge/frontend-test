import styled from "@emotion/styled";
import { Dialog, ModalProps } from "@mui/material";

const Wrapper: React.FC<ModalProps> = ({
  children,
  ...props
}) => {
  return (
    <Dialog {...props} maxWidth={"md"} fullWidth>
      {children}
    </Dialog>
  );
};

export default styled(Wrapper)(() => ({
}));