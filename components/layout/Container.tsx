import React from 'react'

export const Container: React.FC = ({ children }) => {
  return <div className="container h-screen mx-auto">{children}</div>
}
