import React from 'react'
import Date from '../../elements/Date'
import Link from 'next/link'
import { Post } from '../../../DataStructure'

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
      <h3 className="mb-4 text-4xl lg:text-6xl leading-tigh">
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
