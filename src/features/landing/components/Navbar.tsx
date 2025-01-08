import { useState } from 'react'
import { EnterIcon } from '@radix-ui/react-icons'
import { Link } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { LogoIcon } from './Icons'
// import { ModeToggle } from './mode-toggle'
import { buttonVariants } from './ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from './ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'

interface RouteProps {
  href: string
  label: string
}

const routeList: RouteProps[] = [
  {
    href: 'features',
    label: 'Fitur',
  },
  {
    href: 'services',
    label: 'Layanan',
  },
  {
    href: 'pricing',
    label: 'Harga',
  },
  // {
  //   href: 'faq',
  //   label: 'FAQ',
  // },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <header className='sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background'>
      <NavigationMenu className='mx-auto'>
        <NavigationMenuList className='container h-14 px-4 w-screen flex justify-between '>
          <NavigationMenuItem className='font-bold flex'>
            <span className='ml-2 font-bold text-xl flex'>
              <LogoIcon />
              OSIST
            </span>
          </NavigationMenuItem>

          {/* mobile */}
          <span className='flex md:hidden'>
            {/* <ModeToggle /> */}

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className='px-2'>
                <Menu
                  className='flex md:hidden h-5 w-5'
                  onClick={() => setIsOpen(true)}
                >
                  <span className='sr-only'>Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={'left'}>
                <SheetHeader>
                  <SheetTitle className='font-bold text-xl'>
                    Shadcn/React
                  </SheetTitle>
                </SheetHeader>
                <nav className='flex flex-col justify-center items-center gap-2 mt-4'>
                  {routeList.map(({ href, label }: RouteProps) => (
                    <Link
                      rel='noreferrer noopener'
                      key={label}
                      hash={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: 'ghost' })}
                    >
                      {label}
                    </Link>
                  ))}
                  <Link to='/sign-in'>
                    <EnterIcon className='mr-2 w-5 h-5' />
                    Masuk
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className='hidden md:flex gap-2'>
            {routeList.map((route: RouteProps, i) => (
              <Link
                rel='noreferrer noopener'
                hash={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: 'ghost',
                })}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <div className='hidden md:flex gap-2'>
            <Link
              to='/sign-in'
              className={`border ${buttonVariants({ variant: 'secondary' })}`}
            >
              <EnterIcon className='mr-2 w-5 h-5' />
              Masuk
            </Link>

            {/* <ModeToggle /> */}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}