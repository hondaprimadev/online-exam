import { createFileRoute } from '@tanstack/react-router'
import { redirect } from '@tanstack/react-router'
import Dashboard from '@/features/dashboard'

export const Route = createFileRoute('/_authenticated/')({
  beforeLoad: ({ context }) => {
    if (!context.auth.isLogin) {
      throw redirect({
        to: '/sign-in',
      })
    }
  },
  component: Dashboard,
})
