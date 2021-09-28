import Link from 'next/link'
import React from 'react'

import type { Post } from '../../../types'
import Date from '../../elements/Date'

interface Props {
  title: Post['title']
  coverImageUrl?: Post['coverImageUrl']
  date: Post['date']
  author?: Post['author']
  slug: Post['slug']
}

const PostListItem: React.FC<Props> = ({ title, date, slug }) => {
  return (
    <li className="w-full flex flex-col mt-8">
      <h3 className="mb-4 text-3xl md:text-4xl leading-tight">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg">
        <Date dateString={date} />
      </div>
    </li>
  )
}

export default PostListItem
