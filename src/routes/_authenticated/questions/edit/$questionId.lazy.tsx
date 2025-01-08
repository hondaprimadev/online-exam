import { createLazyFileRoute } from '@tanstack/react-router'
import QuestionsForm from '@/features/questions/edit'

export const Route = createLazyFileRoute(
  '/_authenticated/questions/edit/$questionId'
)({
  component: QuestionsForm,
})
