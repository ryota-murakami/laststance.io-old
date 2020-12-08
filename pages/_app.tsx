import { AppProps } from 'next/app'
import '../styles/index.css'
import Head from '../components/layout/Head'
import React from 'react'
import Header from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

const MyApp: React.FC<AppProps> = (props) => {
  const PageComponent = props.Component
  return (
    <>
      <Head />
      <div className="min-h-screen flex flex-col justify-between">
        <Header preview={props.pageProps.preview} />
        <main className="container m-auto">
          <PageComponent {...props.pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default MyApp
