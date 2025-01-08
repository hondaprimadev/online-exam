import { createLazyFileRoute } from '@tanstack/react-router'
import Questions from '@/features/questions'

export const Route = createLazyFileRoute('/_authenticated/questions/')({
  component: Questions,
})
