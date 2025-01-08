export interface IQuestion {
  id: string
  name: string
  desc: string
  maker: {
    id: string
    name: string
  }
  createdAt: string
}

export interface IQuestionForm {
  id: string
  name: string
  desc: string
}
