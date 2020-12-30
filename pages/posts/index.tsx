import React from 'react'
import { MoreStories } from '../../components/pages/posts/MoreStories'
import { HeroPost } from '../../components/pages/posts/HeroPost'
import { getAllPostsForHome } from '../../lib/api'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { Posts, Post } from '../../DataStructure'

interface Props {
  allPosts: Posts
  preview?: GetStaticPropsContext['preview']
}

const PostsPage: React.FC<Props> = ({ allPosts, preview }) => {
  const heroPost: Post = allPosts[0]
  const morePosts: Posts = allPosts.slice(1)
  return (
    <div className="m-auto">
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImageUrl={heroPost.coverImageUrl}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
        />
      )}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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
