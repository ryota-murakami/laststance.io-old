import React from 'react'
import { Avatar } from '../../Avatar'
import Date from '../../Date'
import CoverImage from '../../CoverImage'
import Link from 'next/link'
import { Author, Post } from '../../../DataStructure'

interface Props {
  title: Post['title']
  coverImageUrl?: Post['coverImageUrl']
  date: Post['date']
  slug: Post['slug']
  author: Author
  className?: string
}

const PostPreview: React.FC<Props> = ({
  title,
  coverImageUrl,
  date,
  slug,
  author,
  className,
}) => {
  return (
    <div className={className ? `mx-auto ${className}` : 'mx-auto'}>
      <div className="mb-5">
        <CoverImage
          width={600}
          height={500}
          slug={slug}
          title={title}
          coverImageUrl={coverImageUrl}
        />
      </div>
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
