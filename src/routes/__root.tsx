import { ReactNode, useEffect } from 'react'
import { QueryClient } from '@tanstack/react-query'
import {
  createRootRouteWithContext,
  Outlet,
  useLocation,
} from '@tanstack/react-router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Toaster } from '@/components/ui/toaster'
import GeneralError from '@/features/errors/general-error'
import NotFoundError from '@/features/errors/not-found-error'

interface MyRouterContext {
  // The ReturnType of your useAuth hook or the value of your AuthContext
  isLogin: boolean
}

function replaceAndCapitalize(str: string): string {
  // Mengganti semua '/' dengan spasi
  let replacedStr = str.replace(/\//g, ' ')

  // Menjadikan huruf pertama setiap kata menjadi kapital
  replacedStr = replacedStr.replace(/\b\w/g, (char) => char.toUpperCase())

  return replacedStr
}

function Meta({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  useEffect(() => {
    // console.info('path: ', pathname)
    document.title =
      pathname !== '/'
        ? `${replaceAndCapitalize(pathname)} | OSIST`
        : 'Selamat Datang di Website Resmi Osist'
  }, [pathname])

  return children
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
  auth: MyRouterContext
}>()({
  component: () => {
    return (
      <Meta>
        <Outlet />
        <Toaster />
        {import.meta.env.MODE === 'development' && (
          <>
            <ReactQueryDevtools buttonPosition='bottom-left' />
            <TanStackRouterDevtools position='bottom-left' />
          </>
        )}
      </Meta>
    )
  },
  notFoundComponent: NotFoundError,
  errorComponent: GeneralError,
})
