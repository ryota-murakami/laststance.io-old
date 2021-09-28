// eslint-disable-next-line import/order
import type { AppProps } from 'next/app'

import '../styles/index.css'
import React from 'react'

import { Footer } from '../components/Footer'
import Head from '../components/Head'
import Header from '../components/Header'

const MyApp: React.FC<AppProps> = (props) => {
  const PageComponent = props.Component
  return (
    <>
      <Head />
      <div className="container min-h-screen max-w-screen flex flex-col justify-between mx-auto">
        <Header preview={props.pageProps.preview} />
        <PageComponent {...props.pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default MyApp
