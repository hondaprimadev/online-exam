import image from '../assets/growth.png'
import image4 from '../assets/looking-ahead.png'
import image3 from '../assets/reflecting.png'
// import { Badge } from './ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'

interface FeatureProps {
  title: string
  description: string
  image: string
}

const features: FeatureProps[] = [
  {
    title: 'Pembuatan Soal Ujian Dinamis',
    description:
      'Fitur untuk membuat soal ujian dengan berbagai jenis (pilihan ganda, isian, essay) serta mengatur tingkat kesulitan, materi, dan durasi ujian. Mendukung soal berbasis multimedia dan randomisasi.',
    image: image4,
  },
  {
    title: 'Sistem Pengawasan Ujian (Proctoring)',
    description:
      'Memastikan integritas ujian dengan pemantauan kamera, deteksi gerakan, penguncian browser, dan verifikasi identitas (wajah/sidik jari) untuk menghindari kecurangan.',
    image: image3,
  },
  {
    title: 'Analisis dan Laporan Hasil Ujian',
    description:
      'Fitur untuk mengoreksi soal otomatis, memberikan laporan nilai dan analisis kesalahan siswa, serta menyediakan laporan dalam format yang dapat diunduh (PDF/Excel).',
    image: image,
  },
]

// const featureList: string[] = [
//   'Dark/Light theme',
//   'Reviews',
//   'Features',
//   'Pricing',
//   'Contact form',
//   'Our team',
//   'Responsive design',
//   'Newsletter',
//   'Minimalist',
// ]

export const Features = () => {
  return (
    <section id='features' className='container py-24 sm:py-32 space-y-8'>
      <h2 className='text-3xl lg:text-4xl font-bold md:text-center'>
        Fitur{' '}
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
          Unggulan Kami
        </span>
      </h2>

      {/* <div className='flex flex-wrap md:justify-center gap-4'>
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant='secondary' className='text-sm'>
              {feature}
            </Badge>
          </div>
        ))}
      </div> */}

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center'>
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardFooter>
              <img
                src={image}
                alt='About feature'
                className='w-[200px] lg:w-[300px] mx-auto'
              />
            </CardFooter>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
