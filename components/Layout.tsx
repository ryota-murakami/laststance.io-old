import React from 'react'
import Header from './Header'
import Footer from './Footer'

const PageContainer: React.FC = ({ children }) => <main>{children}</main>

interface Props {
  preview: boolean
}

const Layout: React.FC<Props> = ({ preview, children }) => {
  return (
    <>
      <div className="min-h-screen">
        <Header preview={preview} />
        <PageContainer>{children}</PageContainer>
      </div>
      <Footer />
    </>
  )
}

export default Layout
