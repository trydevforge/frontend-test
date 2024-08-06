import { useMutation } from "react-query";
import * as Constant from "../constants";
import { apiService } from "@/app/data/services";

interface LoginUserProps {
  username: string;
  password: string;
}

export const useLoginUser = () => {
  return useMutation(
    [Constant.UPDATE_USER],
    async ({password,username}:LoginUserProps) => apiService.post("/auth/login", {
      password,
      username,
    }),

  );
};
