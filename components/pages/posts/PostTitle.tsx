import React from 'react'

const PostTitle: React.FC = ({ children }) => {
  return (
    <h1 className="text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-8 text-center mt-8 md:text-left">
      {children}
    </h1>
  )
}

export default PostTitle
