import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { imageBuilder } from '../../lib/sanity'
import { Post } from '../../DataStructure'

interface Props {
  width: number
  height: number
  title: Post['title']
  coverImageUrl: Post['coverImageUrl']
  slug: Post['slug']
}

const CoverImage: React.FC<Props> = ({
  width,
  height,
  title,
  coverImageUrl,
  slug,
}) => {
  const image = (
    <img
      width={width}
      height={height}
      alt={title}
      className={cn('shadow-small', 'mx-auto', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      src={imageBuilder.image(coverImageUrl).height(height).width(width).url()}
    />
  )

  return (
    <div className="mx-auto">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
