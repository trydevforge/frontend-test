import type { AppProps } from "next/app";

import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
import { BaseTheme, queryClient } from "@/app/config";
import { QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider {...pageProps}>
      <ThemeProvider theme={BaseTheme}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </AppCacheProvider>
  );
}
