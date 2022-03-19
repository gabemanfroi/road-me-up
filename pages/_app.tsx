import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import theme from '@shared/theme';
import Sidebar from '@shared/components/Sidebar';
import { DefaultLayout } from '@shared/components/DefaultLayout/style';
import { sidebarWidth } from '@shared/helpers/constants';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
      <DefaultLayout style={{ marginLeft: sidebarWidth }}>
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeProvider>
  );
}

export default MyApp;
