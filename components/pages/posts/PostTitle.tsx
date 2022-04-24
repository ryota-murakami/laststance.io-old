import React, { memo } from 'react'

const PostTitle: React.FC = memo(
  ({ children }) => {
    return (
      <h1 className="md-pr-4 mb-6 mt-6 text-center text-3xl leading-tight md:pl-8 md:text-left md:text-4xl md:leading-none">
        {children}
      </h1>
    )
  },
  () => true
)

export default PostTitle
