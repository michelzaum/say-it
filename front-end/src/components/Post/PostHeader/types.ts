export type User = {
  user_id: string
  first_name: string
  last_name: string
  email: string
  country: string
}

export type PostHeaderProps = {
  userInfo: User
  time: string
}
