import React from 'react'
import { Avatar } from '../../elements/Avatar'
import Date from '../../elements/Date'
import Link from 'next/link'
import { Post } from '../../../DataStructure'

interface Props {
  title: Post['title']
  coverImageUrl: Post['coverImageUrl']
  date: Post['date']
  author: Post['author']
  slug: Post['slug']
}

export const HeroPost: React.FC<Props> = ({ title, date, author, slug }) => {
  return (
    <section className="mx-auto">
      <div className="my-8 mx-auto">
        {/* @TODO Currently Disable show CoverImage. */}
        {/*<CoverImage*/}
        {/*  width={1000}*/}
        {/*  height={700}*/}
        {/*  slug={slug}*/}
        {/*  title={title}*/}
        {/*  coverImageUrl={coverImageUrl}*/}
        {/*/>*/}
      </div>
      <div className="pl-4 pr-4 mb-20 md:mb-28 md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight text-center">
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
