import { AppProps } from 'next/app'
import '../styles/index.css'
import HeadMeta from '../components/layout/HeadMeta'
import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

// @Todo Create control frow pass preview={preview} Component if Component was Posts,[slug].tsx
const MyApp: React.FC<AppProps> = (props) => {
  const Component = props.Component
  return (
    <>
      <HeadMeta />
      <Layout preview={props.pageProps.preview}>
        <Component {...props.pageProps} />
      </Layout>
    </>
  )
}

interface Props {
  preview: boolean
}

const Layout: React.FC<Props> = ({ preview, children }) => {
  return (
    <>
      <div className="min-h-screen">
        <Header preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default MyApp
