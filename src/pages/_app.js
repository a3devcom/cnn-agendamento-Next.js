import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import ContextProvider from '@/context/contextProvider';
import theme from '@/styles/theme';
import { CssBaseline } from '@mui/material';
import '../styles/globals.css';
import 'dayjs/locale/pt-br';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Clínica Frei Galvão</title>
        <meta name="description" content="Copyright © Clínica Frei Galvão" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContextProvider>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
              <Component {...pageProps} />
          </LocalizationProvider>
        </ThemeProvider>
      </ContextProvider>
    </>
  );
}

export default MyApp;
