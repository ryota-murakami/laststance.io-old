export interface Author {
  name: string
  picture: string
}

export interface Post {
  title: string
  content: string
  coverImageUrl: string
  date: string
  slug: string
  author: Author
}

export type Posts = Post[]

export type _ = any
