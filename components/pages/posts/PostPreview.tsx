import React from 'react'
import { Avatar } from '../../generic/Avatar'
import Date from '../../generic/Date'
import CoverImage from '../../generic/CoverImage'
import Link from 'next/link'
import { Author, Post } from '../../../DataStructure'

interface Props {
  title: Post['title']
  coverImageUrl?: Post['coverImageUrl']
  date: Post['date']
  slug: Post['slug']
  author: Author
}

const PostPreview: React.FC<Props> = ({
  title,
  coverImageUrl,
  date,
  slug,
  author,
}) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} coverImageUrl={coverImageUrl} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}

export default PostPreview
