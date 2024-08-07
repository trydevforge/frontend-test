import styled from "@emotion/styled";
import { TextField as Input, TextFieldProps, } from "@mui/material";

const Wrapper: React.FC<TextFieldProps> = ({
  ...props
}) => {
  return (
    <Input {...props} />
  );
};

export default styled(Wrapper)(() => ({
  
}));