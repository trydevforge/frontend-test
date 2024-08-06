import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Box, Button, Typography } from "@/app/ui";
import { LayoutProps } from "..";
import { AppBarContainer, ContentContainer, MainContainer } from "./styled";
import Cookies from 'js-cookie';
import { useRouter } from "next/router";
import ErrorBoundary from "@/app/pages/ErrorBoundary";

export const AppBarLayout:React.FC<LayoutProps> = ({children}) => {
  const router = useRouter();
  const handleLogOut = () => {
    Cookies.remove('token');
    router.push('/login');
  }
  return (
    <MainContainer sx={{ flexGrow: 1 }}>
      <AppBarContainer position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DFT Store
          </Typography>
          <Button variant="contained" onClick={handleLogOut}>LogOut</Button>
        </Toolbar>
      </AppBarContainer>
      <ErrorBoundary>
      <ContentContainer>
        {children}
      </ContentContainer>
      </ErrorBoundary>
    </MainContainer>
  );
}
