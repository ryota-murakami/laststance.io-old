import React from 'react'
import Alert from '../components/Alert'
import Footer from './Footer'
import Meta from './Meta'

interface Props {
  preview: boolean
}

const PageContainer: React.FC = ({ children }) => <main>{children}</main>

const Layout: React.FC<Props> = ({ preview, children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <PageContainer>{children}</PageContainer>
      </div>
      <Footer />
    </>
  )
}

export default Layout
