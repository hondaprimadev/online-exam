import { Link } from '@tanstack/react-router'
import { Card } from '@/components/ui/card'
import AuthLayout from '../auth-layout'
import { ForgotForm } from './components/forgot-password-form'

export default function ForgotPassword() {
  return (
    <AuthLayout>
      <Card className='p-6'>
        <div className='mb-2 flex flex-col space-y-2 text-left'>
          <h1 className='text-md font-semibold tracking-tight'>
            Lupa password
          </h1>
          <p className='text-sm text-muted-foreground'>
            Masukan email yang anda daftarkan
            <br /> kami akan mengirim link untuk reset ulang password.
          </p>
        </div>
        <ForgotForm />
        <p className='mt-4 px-8 text-center text-sm text-muted-foreground'>
          Belum punya akun?{' '}
          <Link
            to='/sign-up'
            className='underline underline-offset-4 hover:text-primary'
          >
            Daftar sekarang
          </Link>
          .
        </p>
      </Card>
    </AuthLayout>
  )
}
