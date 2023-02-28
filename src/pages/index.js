import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles';
import ContextProvider from '@/context/contextProvider'
import theme from '@/styles/theme';
import TypeSelection from '@/components/TypeSelection';
import { CssBaseline } from '@mui/material';

export default function Home() {
  return (
    <>
      <ContextProvider>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <TypeSelection />
          </main>
        </ThemeProvider>
      </ContextProvider>
    </>
  )
}
