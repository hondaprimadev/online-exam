import { Check } from 'lucide-react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string
  popular: PopularPlanType
  price: string
  description: string
  buttonText: string
  benefitList: string[]
}

const pricingList: PricingProps[] = [
  {
    title: 'Free',
    popular: 0,
    price: '0',
    description: 'Fitur dibatasi.',
    buttonText: 'Coba Sekarang',
    benefitList: [
      'Pembuatan soal ujian (hingga 5 soal per ujian)',
      'Soal pilihan ganda',
      'Laporan hasil ujian dasar (nilai dan peringkat)',
      'Unduh hasil ujian dalam format PDF',
      'Notifikasi jadwal ujian untuk siswa',
      'Akses terbatas ke fitur pengaturan ujian (misalnya, hanya 1 ujian aktif per bulan)',
      'Peserta 10 siswa',
      'Guru/Operator: 1 akun pengguna (guru/operator utama)',
    ],
  },
  {
    title: 'Premium',
    popular: 1,
    price: '5.000',
    description: 'Hanya 5 ribu rupiah, harga normal Rp 500,000,-.',
    buttonText: 'Start Free Trial',
    benefitList: [
      'Pembuatan soal ujian (hingga 50 soal per ujian)',
      'Soal pilihan ganda dan essay',
      'Pembuatan ujian dengan batas waktu',
      'Pengawasan ujian (proctoring) penguncian browser',
      'Pengacakan soal otomatis (randomized questions)',
      'Laporan hasil ujian dengan analisis mendalam (kesalahan siswa, kesulitan soal)',
      'Integrasi multimedia dalam soal ujian (gambar, video, audio)',
      'Laporan hasil ujian dasar (nilai dan peringkat)',
      'Unduh hasil ujian dalam format PDF/Excel',
      'Notifikasi jadwal ujian untuk siswa',
      'Peserta hingga 100 siswa',
      'Guru/Operator: 3 akun pengguna (admin, guru, dan operator)',
    ],
  },
  {
    title: 'Enterprise',
    popular: 0,
    price: '1.500K',
    description: 'Dapatkan akses tak terbatas.',
    buttonText: 'Contact US',
    benefitList: [
      'SEMUA FITUR DI PAKET PREMIUM',
      'Pembuatan soal tanpa batasan jumlah soal',
      'Dukungan teknis prioritas',
      'Pelaporan kustom dan analisis statistik hasil ujian',
      'Siswa: Hingga 500 siswa',
      'Guru/Operator: 20 akun pengguna (admin, beberapa guru, operator, dan pengawas ujian)',
    ],
  },
]

export const Pricing = () => {
  return (
    <section id='pricing' className='container py-24 sm:py-32'>
      <h2 className='text-3xl md:text-4xl font-bold text-center'>
        Dapatkan
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
          {' '}
          Akses{' '}
        </span>
        Tak Terbatas
      </h2>
      <h3 className='text-xl text-center text-muted-foreground pt-4 pb-8'>
        Dengan menambahkan Paket Gratis, kami memberikan kesempatan kepada
        sekolah-sekolah untuk mencoba aplikasi OSIST sebelum berkomitmen pada
        paket berbayar.
      </h3>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? 'drop-shadow-xl shadow-black/10 dark:shadow-white/10'
                : ''
            }
          >
            <CardHeader>
              <CardTitle className='flex item-center justify-between'>
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant='secondary' className='text-sm text-primary'>
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className='text-3xl font-bold'>Rp{pricing.price}</span>
                <span className='text-muted-foreground'> /bulan</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className='w-full'>{pricing.buttonText}</Button>
            </CardContent>

            <hr className='w-4/5 m-auto mb-4' />

            <CardFooter className='flex'>
              <div className='space-y-4'>
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className='flex'>
                    <Check className='text-green-500' />{' '}
                    <h3 className='ml-2'>{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
