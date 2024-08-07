import { Button, Input, Toaster, Typography } from "@/app/ui";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from 'zod';
import { LoginPageContainer } from "./styled";
import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import { useLoginUser } from "@/app/hooks/mutation";

// Define the validation schema using Zod
const LoginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

// Infer the types from the schema
type LoginSchemaTypes = z.infer<typeof LoginSchema>;

export const LoginContainer = () => {
  // Set up the form with react-hook-form
  const {
    handleSubmit,
    formState: { defaultValues, },
    control,
  } = useForm<LoginSchemaTypes>({ defaultValues: { username: "", password: "" } });
  const router = useRouter();

  const { mutate, isLoading } = useLoginUser();

  // Handle form submission
  const onSubmit: SubmitHandler<LoginSchemaTypes> = async (data) => {
    mutate({
      password: data.password ?? "",
      username: data.username ?? "",
    }, {
      onSuccess: (res) => {
        Cookies.set('token', res.token);
        router.push("/products");
      },
      onError: (error) => {
        Toaster({ message: error, variant: "error" });
      }
    });
  };

  return (
    <LoginPageContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4" gutterBottom data-testid="login-page-label">
          Store Login
        </Typography>
        <Controller
          name="username"
          control={control}
          rules={{
            required: "Please enter your Username!",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              data-testid="username-input"
              label="UserName"
              fullWidth
              margin="normal"
              defaultValue={value}
              error={!!error?.message}
              helperText={error?.message}
              name="username"
              placeholder="Enter your username"
              onChange={onChange}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{
            required: "Please enter your Password!",
            minLength: {
              value: 3,
              message: "Password must be at least 3 characters",
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Input
              data-testid="password-input"
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              defaultValue={value}
              error={!!error?.message}
              helperText={error?.message}
              name="password"
              placeholder="Enter your password"
              onChange={onChange}
            />
          )}
        />

        <Button type="submit" variant="contained" color="primary" disabled={isLoading} data-testid="submit-login">
          Submit
        </Button>
      </form>
    </LoginPageContainer>
  );
};
