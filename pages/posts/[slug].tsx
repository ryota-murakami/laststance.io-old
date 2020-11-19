import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths } from 'next'
import ErrorPage from 'next/error'
import Container from '../../components/generic/Container'
import PostBody from '../../components/pages/posts/[id]/PostBody'
import MoreStories from '../../components/pages/posts/MoreStories'
import LeftUpperWebSiteNameLink from '../../components/pages/posts/[id]/LeftUpperWebSiteNameLink'
import PostHeader from '../../components/pages/posts/[id]/PostHeader'
import SectionSeparator from '../../components/generic/SectionSeparator'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/pages/posts/PostTitle'
import Head from 'next/head'
import { MorePosts, Post } from '../../DataStructure'

interface Props {
  post: Post
  morePosts: MorePosts
  preview: boolean
}

const Posts: React.FC<Props> = ({ post, morePosts, preview }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Container>
      <LeftUpperWebSiteNameLink />
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>
                {post.title} | Laststance.io is indipendent organization for OSS
                activity.
              </title>
              {/* <meta property="og:image" content={post.ogImage.url} /> */}
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
            />
            <PostBody content={post.content} />
          </article>
          <SectionSeparator />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </>
      )}
    </Container>
  )
}

export default Posts

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  }
}
