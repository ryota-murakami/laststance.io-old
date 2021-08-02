import React from 'react'

const PostTitle: React.FC = ({ children }) => {
  return (
    <h1 className="text-3xl md:text-4xl leading-tight mb-6 mt-6 text-center md:pl-8 md-pr-4 md:leading-none md:text-left">
      {children}
    </h1>
  )
}

export default PostTitle
