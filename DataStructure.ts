export interface Author {
  name: string
  picture: string
}

export interface Post {
  title: string
  content: string
  coverImage: string
  date: string
  slug: string
  author: Author
}

export type AllPosts = Post[]

export type MorePosts = Post[]
