import { Button } from "@mui/material";
import { closeSnackbar, enqueueSnackbar } from "notistack";
import React from "react";

export { Snackbar, IconButton, Alert } from "@mui/material";
export const Toaster = ({
  message,
  variant,
}: {
  message: any;
  variant?: "default" | "error" | "success" | "warning" | "info";
}) => {
  return enqueueSnackbar(
    variant === "success"
      ? message
      : message.status === 500
      ? message?.error
      : typeof message === "string"
      ? message
      : "Something went wrong!",
    {
      variant: variant || "default",
      anchorOrigin: { vertical: "top", horizontal: "right" },
      style: { whiteSpace: "pre-line", maxWidth: "500px" },
      autoHideDuration: 5000,
      action: (key) => {
        return (
          <Button
            onClick={() => {
              closeSnackbar(key);
            }}
            color="inherit"
            variant="outlined"
            size="small"
          >
            X
          </Button>
        );
      },
    }
  );
};
