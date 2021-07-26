import React from 'react'
import PostLinkItem from '../../components/pages/posts/PostListItem'
import { getAllPostsForHome } from '../../lib/api'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { Posts, Post } from '../../types'

interface Props {
  allPosts: Posts
  preview?: GetStaticPropsContext['preview']
}

const PostsPage: React.FC<Props> = ({ allPosts }) => {
  return (
    <div className="px-20 m-auto w-full">
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
}

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
