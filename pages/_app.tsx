import { AppProps } from 'next/app'
import '../styles/index.css'
import HeadMeta from '../components/layout/HeadMeta'
import React from 'react'
import { Layout } from '../components/layout/Layout'

// @Todo Create control frow pass preview={preview} Component if Component was Posts,[slug].tsx
const MyApp: React.FC<AppProps> = (props) => {
  const PageComponent = props.Component
  return (
    <>
      <HeadMeta />
      <Layout preview={props.pageProps.preview}>
        <PageComponent {...props.pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
