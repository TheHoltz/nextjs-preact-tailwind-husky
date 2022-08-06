import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <NextNProgress color="#000" height={6} key="progress-bar" />
      <Component {...pageProps} />
    </>
  )
}

export default App
