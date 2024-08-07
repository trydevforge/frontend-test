import type { AppProps } from "next/app";
import NiceModal from "@ebay/nice-modal-react";

import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import { BaseTheme, queryClient } from "@/app/config";
import { QueryClientProvider } from "react-query";
import { SnackbarProvider } from "notistack";
import { ReactElement } from "react";
import { NextPage } from "next";
import { AppBarLayout } from "../layout/app-bar";
import NextNProgress from 'nextjs-progressbar';

interface LayoutProps {
  layout?: "AUTH" | "DEFAULT" | "NO_LAYOUT";
}

export type NextPageWithLayout<P = {}> = NextPage<P> & LayoutProps;
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const getLayout = (page: ReactElement, { layout, ...rest }: LayoutProps) => {
  if (layout === "NO_LAYOUT") {
    return page;
  }
  return <AppBarLayout {...rest}>{page}</AppBarLayout>;
};


export default function App({ Component, pageProps }: AppPropsWithLayout) {

  return (
    <AppCacheProvider {...pageProps}>
      <NiceModal.Provider>
        <ThemeProvider theme={BaseTheme}>
          <QueryClientProvider client={queryClient}>
            <SnackbarProvider>
              <NextNProgress />
              {getLayout(<Component {...pageProps} />, Component)}
            </SnackbarProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </NiceModal.Provider>
    </AppCacheProvider>
  );
}

