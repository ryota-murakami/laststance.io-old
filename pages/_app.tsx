import { AppProps } from 'next/app'
import '../styles/index.css'
import { ReactElement } from 'react'

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return <Component {...pageProps} />
}

export default MyApp
