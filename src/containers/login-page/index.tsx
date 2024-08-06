import { Button, Input, Toaster, Typography } from "@/app/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from 'zod';
import { LoginPageContainer } from "./styled";
import { TextField } from "@mui/material";
import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import { useLoginUser } from "@/app/hooks/mutation";

// Define the validation schema using Zod
const LoginSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters").max(20).optional(),
  password: z.string().min(3, "Password must be at least 3 characters").max(20).optional(),
});

// Infer the types from the schema
type LoginSchemaTypes = z.infer<typeof LoginSchema>;

export const LoginContainer = () => {
  // Set up the form with react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors ,defaultValues}
  } = useForm<LoginSchemaTypes>({ resolver: zodResolver(LoginSchema) , defaultValues: { username: "", password: "" }});
  const router = useRouter();

  const { mutate , isLoading} = useLoginUser();

  // Handle form submission
  const onSubmit: SubmitHandler<LoginSchemaTypes> = async (data) => {
    mutate({
      password: data.password ?? "",
      username: data.username ?? "",
    },{
      onSuccess: (res) => {
        Cookies.set('token', res.token);
        router.push("/products");
      },
      onError: (error) => {
        console.log(error,"error");
        Toaster({ message: error, variant: "error" });
      }
    });
  };



  return (
    <LoginPageContainer>
<form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <TextField
            label="UserName"
            fullWidth
            margin="normal"
            defaultValue={defaultValues?.username}
            {...register("username")}
            error={!!errors.username}
            helperText={errors.username?.message}
            name="username"
            placeholder="Enter your username"
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            defaultValue={defaultValues?.password}
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            name="password"
            placeholder="Enter your password"
          />

          <Button type="submit" variant="contained" color="primary" disabled={isLoading}>
            Submit
          </Button>
        </form>
    </LoginPageContainer>
  );
};
