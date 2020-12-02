import { AppProps } from 'next/app'
import '../styles/index.css'
import HeadMeta from '../components/layout/HeadMeta'
import React from 'react'
import Header from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

const MyApp: React.FC<AppProps> = (props) => {
  const PageComponent = props.Component
  return (
    <>
      <HeadMeta />
      <div className="min-h-screen">
        <Header preview={props.pageProps.preview} />
        <main className="w-screen h-screen lg:container m-auto">
          <PageComponent {...props.pageProps} />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default MyApp
