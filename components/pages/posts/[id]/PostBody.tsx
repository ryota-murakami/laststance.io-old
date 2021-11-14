import BlockContent from '@sanity/block-content-to-react'
import React, { memo } from 'react'

import type { Post } from '../../../../types'

interface Props {
  content: Post['content']
}

export const PostBody: React.FC<Props> = memo(
  ({ content }) => {
    return (
      <div className="mt-5 max-w-2xl mx-auto">
        <BlockContent blocks={content} className="prose prose-xl" />
      </div>
    )
  },
  () => true
)
