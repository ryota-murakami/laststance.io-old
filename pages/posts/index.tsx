import type { GetStaticProps, GetStaticPropsContext } from 'next'
import React, { memo } from 'react'

import PostLinkItem from '../../components/pages/posts/PostListItem'
import { getAllPostsForHome } from '../../lib/api'
import type { Posts, Post } from '../../types'

interface Props {
  allPosts: Posts
  preview?: GetStaticPropsContext['preview']
}

const PostsPage: React.FC<Props> = memo(({ allPosts }) => {
  return (
    <div className="px-6 py-6 sm:px-20 m-auto flex-grow w-full">
      <ul className="flex flex-col w-full">
        {allPosts.map((post) => (
          <PostLinkItem
            key={post.slug}
            title={post.title}
            coverImageUrl={post.coverImageUrl}
            date={post.date}
            author={post.author}
            slug={post.slug}
          />
        ))}
      </ul>
    </div>
  )
})
PostsPage.displayName = 'PostsPage'

export default PostsPage

type StaticProps = GetStaticPropsContext<Pick<Post, 'slug'>>

export const getStaticProps: GetStaticProps<StaticProps> = async ({
  preview = false,
}) => {
  const allPosts: Posts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}
