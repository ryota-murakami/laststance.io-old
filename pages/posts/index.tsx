import type { GetStaticProps, GetStaticPropsContext } from 'next'
import React, { memo } from 'react'

import PostLinkItem from '../../components/pages/posts/PostListItem'
import { getAllPostsForHome } from '../../lib/api'
import type { Posts, Post } from '../../types'

interface Props {
  allPosts: Posts
  preview?: GetStaticPropsContext['preview']
}

const PostsPage: React.FC<Props> = memo(
  ({ allPosts }) => {
    return (
      <div className="m-auto w-full flex-grow px-6 py-6 sm:px-20">
        <ul className="flex w-full flex-col">
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
  },
  () => true
)
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
