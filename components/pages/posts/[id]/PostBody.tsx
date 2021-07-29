import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { Post } from '../../../../types'

interface Props {
  content: Post['content']
}

export const PostBody: React.FC<Props> = ({ content }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <BlockContent blocks={content} className="prose sm:prose-xl" />
    </div>
  )
}
