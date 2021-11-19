import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../layout/Layout'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider themes={['1', '2', '3']} enableSystem>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
