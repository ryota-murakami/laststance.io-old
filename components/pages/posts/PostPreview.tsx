import React from 'react'
import { Avatar } from '../../elements/Avatar'
import Date from '../../elements/Date'
import Link from 'next/link'
import { Author, Post } from '../../../DataStructure'

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
        <h3 className="text-3xl mb-3 leading-snug text-center">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="text-lg mb-4">
          <Date dateString={date} />
        </div>
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </div>
  )
}

export default PostPreview
