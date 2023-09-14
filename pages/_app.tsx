import type { AppProps } from 'next/app'
import React, { memo } from 'react'
import '../styles/index.css'

import { Footer } from '../components/Footer'
import Head from '../components/Head'
import Header from '../components/Header'

// @TODO try app dir
const MyApp: React.FC<AppProps> = memo((props) => {
  const PageComponent = props.Component
  return (
    <>
      <Head />
      <div className="container flex flex-col min-h-screen">
        <Header />
        <PageComponent {...props.pageProps} />
        <Footer />
      </div>
    </>
  )
})
MyApp.displayName = 'MyApp'

export default MyApp
