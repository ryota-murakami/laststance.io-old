import { AppProps } from 'next/app'
import '../styles/index.css'
import HeadMeta from '../components/HeadMeta'
import React from 'react'

// @Todo Create control frow pass preview={preview} Component if Component was Posts,[slug].tsx
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <HeadMeta />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
