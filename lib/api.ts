import client, { previewClient } from './sanity'
import { AllPosts, MorePosts, Post } from '../DataStructure'

const getUniquePosts = (posts) => {
  const slugs = new Set()
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false
    } else {
      slugs.add(post.slug)
      return true
    }
  })
}

const postFields = `
  name,
  title,
  date,
  'slug': slug.current,
  'coverImageUrl': coverImageUrl.asset->url,
  'author': author->{name, 'picture': picture.asset->url},
`

const getClient = (preview) => (preview ? previewClient : client)

export async function getPreviewPostBySlug(slug: Post['slug']): Promise<Post> {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(date desc){
      ${postFields}
      content
    }`,
    { slug }
  )
  return data[0]
}

export async function getAllPostsWithSlug(): Promise<AllPosts> {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`)
  return data
}

export async function getAllPostsForHome(preview: boolean): Promise<AllPosts> {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(date desc, _updatedAt desc){
      ${postFields}
    }`)
  return getUniquePosts(results)
}

export async function getPostAndMorePosts(
  slug: Post['slug'],
  preview: boolean
): Promise<{ post: Post; morePosts: MorePosts }> {
  const curClient = getClient(preview)
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        content,
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc){
        ${postFields}
        content,
      }[0...2]`,
      { slug }
    ),
  ])
  return { post, morePosts: getUniquePosts(morePosts) }
}
