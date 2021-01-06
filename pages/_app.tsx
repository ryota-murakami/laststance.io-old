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
      <div className="min-h-screen flex flex-col justify-between items-center">
        <Header preview={props.pageProps.preview} />
        <main className="container m-auto max-w-5xl">
          <PageComponent {...props.pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default MyApp
