import type {
  GetStaticProps,
  GetStaticPaths,
  GetStaticPropsContext,
} from 'next'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { memo } from 'react'

import { PostBody } from '../../components/pages/posts/[id]/PostBody'
import PostHeader from '../../components/pages/posts/[id]/PostHeader'
import PostTitle from '../../components/pages/posts/PostTitle'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import type { Post } from '../../types'

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  // @ts-ignore @TODO I don't know how resove this at the time
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      post: data?.post || null,
      preview,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()
  return {
    fallback: true,
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
  }
}

interface Props {
  post: Post
  preview?: GetStaticPropsContext['preview']
}

const PostPage: React.FC<Props> = memo(
  ({ post }) => {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
      return <ErrorPage bage statusCode={404} />
    }
    return (
      <div className="flex-grow pl-4 pr-4">
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Laststance.io is indipendent organization for
                  OSS activity.
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <PostHeader
                title={post.title}
                coverImageUrl={post.coverImageUrl}
                date={post.date}
                author={post.author}
                slug={post.slug}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </div>
    )
  },
  () => true
)

export default PostPage
