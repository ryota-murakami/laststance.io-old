import React from 'react'

const PostTitle: React.FC = ({ children }) => {
  return (
    <h1 className="text-4xl md:text-5xl leading-tight mb-8 mt-8 text-center md:pl-8 md-pr-4 md:leading-none md:text-left">
      {children}
    </h1>
  )
}

export default PostTitle
