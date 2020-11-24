import Container from '../../components/generic/Container'
import MoreStories from '../../components/pages/posts/MoreStories'
import HeroPost from '../../components/pages/posts/HeroPost'
import Intro from '../../components/pages/posts/Intro'
import { getAllPostsForHome } from '../../lib/api'
import { GetStaticProps } from 'next'
import { AllPosts } from '../../DataStructure'

interface Props {
  allPosts: AllPosts
  preview: boolean
}

const IndexPage: React.FC<Props> = ({ allPosts, preview }) => {
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

export default IndexPage

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}
