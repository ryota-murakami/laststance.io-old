import { AppProps } from 'next/app'
import '../styles/index.css'
import Head from 'next/head'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Laststance.io</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
