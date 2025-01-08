import { createLazyFileRoute } from '@tanstack/react-router'
import Landing from '@/features/landing'

export const Route = createLazyFileRoute('/')({
  component: Landing,
})
