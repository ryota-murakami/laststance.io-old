import Container from '../../components/Container'
import MoreStories from '../../components/MoreStories'
import HeroPost from '../../components/HeroPost'
import Intro from '../../components/Intro'
import Layout from '../../components/Layout'
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
    <Layout preview={preview}>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  )
}

export default IndexPage

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
  }
}
