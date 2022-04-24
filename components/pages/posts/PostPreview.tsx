import Link from 'next/link'
import React from 'react'

import type { Author, Post } from '../../../types'
import { Avatar } from '../../elements/Avatar'
import Date from '../../elements/Date'

interface Props {
  title: Post['title']
  date: Post['date']
  slug: Post['slug']
  author: Author
  className?: string
}

const PostPreview: React.FC<Props> = ({
  title,
  date,
  slug,
  author,
  className,
}) => {
  return (
    <div className={className ? `mx-auto ${className}` : 'mx-auto'}>
      <div className="mb-5"></div>
      <div className="pl-4 pr-4">
        <h3 className="mb-3 text-center text-3xl leading-snug">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="mb-4 text-lg">
          <Date dateString={date} />
        </div>
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </div>
  )
}

export default PostPreview
