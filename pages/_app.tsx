import { AppProps } from 'next/app'
import '../styles/index.css'
import Head from '../components/Head'
import React from 'react'
import Header from '../components/Header'
import { Footer } from '../components/Footer'

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
