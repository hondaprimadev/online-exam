import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
// import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import QuestionContent from './components/question-content'
import QuestionDialog from './components/question-dialog'
import QuestionProvider from './context/question-context'

export default function Questions() {
  return (
    <QuestionProvider>
      {/* ===== Top Heading ===== */}
      <Header>
        {/* <Search /> */}
        <div className='ml-auto flex items-center gap-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      {/* ===== Content ===== */}
      <Main fixed>
        <div>
          <h1 className='text-2xl font-bold tracking-tight'>Bank Soal</h1>
          <p className='text-muted-foreground'>
            Silahkan buat atau update soal di sini!
          </p>
        </div>
        <QuestionContent />
      </Main>
      <QuestionDialog />
    </QuestionProvider>
  )
}
