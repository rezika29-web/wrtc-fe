export type Register = {
  email: string
  password: string
}
export type Faq = {
  faq: string
  order: string
  filtered?: { id: string; value: string }[]
  sorted?: { id: string; value: string }[]
}
export type userPayload = {
  fullname: string
  username: string
  email: string
  new_password: string
  confirm_new_password: string
  role_id: string
}

export type qnaPayload = {
  question: string
  answer: string
  order: number
  faq_id: string
  faq: string
}
