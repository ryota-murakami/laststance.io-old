import type { AppProps } from 'next/app'
import React, { memo } from 'react'
import '../styles/index.css'

import { Footer } from '../components/Footer'
import Head from '../components/Head'
import Header from '../components/Header'

const MyApp: React.FC<AppProps> = memo((props) => {
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
})
MyApp.displayName = 'MyApp'

export default MyApp
