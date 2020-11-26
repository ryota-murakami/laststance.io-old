import React from 'react'
import { Avatar } from '../../generic/Avatar'
import Date from '../../generic/Date'
import CoverImage from '../../generic/CoverImage'
import Link from 'next/link'
import { Post } from '../../../DataStructure'

interface Props {
  title: Post['title']
  coverImageUrl: Post['coverImageUrl']
  date: Post['date']
  author: Post['author']
  slug: Post['slug']
}

const HeroPost: React.FC<Props> = ({
  title,
  coverImageUrl,
  date,
  author,
  slug,
}) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage slug={slug} title={title} coverImageUrl={coverImageUrl} />
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  )
}

export default HeroPost
