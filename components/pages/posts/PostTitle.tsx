import React from 'react'

const PostTitle: React.FC = ({ children }) => {
  return (
    <h1 className="text-6xl font-bold mb-8 mt-8 text-center tracking-tighter leading-tight md:pl-8 md-pr-4 md:leading-none md:text-left">
      {children}
    </h1>
  )
}

export default PostTitle
