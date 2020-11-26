import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface Props {
  preview?: GetStaticPropsContext['preview']
}

export const Layout: React.FC<Props> = ({ preview, children }) => {
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
