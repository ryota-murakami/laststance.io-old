import Container from '../../components/generic/Container'
import MoreStories from '../../components/pages/posts/MoreStories'
import HeroPost from '../../components/pages/posts/HeroPost'
import Intro from '../../components/generic/Intro'
import { getAllPostsForHome } from '../../lib/api'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { Posts, Post } from '../../DataStructure'

interface Props {
  allPosts: Posts
  preview?: GetStaticPropsContext['preview']
}

const PostsIndexPage: React.FC<Props> = ({ allPosts, preview }) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <Container>
      <Intro />
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
    </Container>
  )
}

export default PostsIndexPage

type StaticProps = GetStaticPropsContext<Pick<Post, 'slug'>>

export const getStaticProps: GetStaticProps<StaticProps> = async ({
  preview = false,
}) => {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}
