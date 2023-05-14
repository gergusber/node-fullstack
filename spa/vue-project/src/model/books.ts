export interface Root {
  books: Book[]
  meta: Meta
}

export interface Book {
  author: string
  cover: string
  rating: string
  slug: string
  synopsis: string
  title: string
  upvoted: boolean
  upvotes: number
}

export interface Meta {
  count: number
}