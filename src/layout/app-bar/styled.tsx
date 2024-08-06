import { Box } from "@/app/ui";
import {  AppBar, styled } from "@mui/material";

export const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  position: 'relative',
}));

export const AppBarContainer = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  position: 'fixed',
  top: 0,
  left: 0,
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
  maxWidth: "1250px",
  margin: "64px auto 0 auto",
}));