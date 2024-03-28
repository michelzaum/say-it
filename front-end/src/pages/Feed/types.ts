export type PostInterface = {
  content: string
  created_at: string
  id: string
  author: {
    user_id: string
    country: string
    first_name: string
    last_name: string
    email: string
  }
}
