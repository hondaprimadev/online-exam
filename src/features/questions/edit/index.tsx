import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from '@tanstack/react-router'
import { useParams } from '@tanstack/react-router'
import {
  IconAlertCircle,
  IconArrowLeft,
  IconCheck,
  IconPlus,
  IconTrash,
} from '@tabler/icons-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Form, // Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
// import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { questions } from '../data/data'

export default function QuestionsForm() {
  const navigate = useNavigate()
  const form = useForm()
  const { questionId } = useParams({ strict: false })

  const [questionsData, setQuestionsData] = useState([1, 2, 3, 4, 5])

  const question = useMemo(
    () => questions.find((_q) => _q.id === questionId),
    [questionId]
  )

  const handleAddQuestion = () => {
    setQuestionsData((_prev) => [..._prev, _prev.length + 1])
  }

  const handleDeleteQuestion = (index: number) => {
    const _data = [...questionsData].filter((_val, _index) => _index !== index)

    setQuestionsData(_data)
  }

  const fileRef = form.register('file')
  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header>
        {/* <Search /> */}
        <div className='flex gap-2'>
          <Button
            className='w-12 h-8'
            variant={'outline'}
            onClick={() => {
              navigate({
                to: '/questions',
                viewTransition: true,
              })
            }}
          >
            <IconArrowLeft size={18} />
          </Button>
        </div>
        <div className='ml-auto flex items-center gap-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      {/* ===== Content ===== */}
      <Main fixed>
        <div className='flex'>
          <div className='flex-1'>
            <h1 className='text-2xl no-scrollbar tracking-tight'>
              {question?.name}
            </h1>
            <p className='text-muted-foreground'>{question?.desc}</p>
            <p className='text-muted-foreground'>{question?.createdAt}</p>
          </div>

          <div className='flex-1 text-right'>
            <h1 className='text-base tracking-muted'>
              {question?.maker.name.toUpperCase()}
            </h1>
          </div>
        </div>
        <Separator className='shadow mb-4' />
        <div className='flex gap-2 pb-4'>
          <Button
            variant='outline'
            onClick={handleAddQuestion}
            className='space-x-1'
          >
            <IconPlus size={18} /> <span>PERTANYAAN</span>
          </Button>
          <Button
            variant='secondary'
            onClick={handleAddQuestion}
            className='space-x-1'
          >
            <IconCheck size={18} /> <span>SIMPAN</span>
          </Button>
        </div>
        <div className='no-scrollbar overflow-auto'>
          <Alert variant='destructive' className='my-4'>
            <IconAlertCircle className='h-4 w-4' />
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>
              Jika pilhan ganda anda kurang dari 5, silahkan kosongkan sisanya,
              sistem akan otomatis membaca sendiri!
            </AlertDescription>
          </Alert>
          {questionsData.map((_num, _index) => (
            <div className='rounded-lg border p-4 hover:shadow-md my-2'>
              <div className='flex flex-row'>
                <div className='basis-3/5 mr-6'>
                  <h4 className='font-bold'>{`PERTANYAAN ${_num}`}</h4>
                  <Textarea
                    style={{ minHeight: 250 }}
                    className='my-4'
                    placeholder='Masukan soal disini.'
                  />
                  <Form {...form}>
                    <form
                      id='task-import-form'
                      onSubmit={form.handleSubmit(() => {})}
                    >
                      <FormField
                        control={form.control}
                        name='file'
                        render={() => (
                          <FormItem className='space-y-2'>
                            <FormControl>
                              <Input
                                type='file'
                                {...fileRef}
                                className='h-10'
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </form>
                  </Form>
                </div>
                <div className='basis-2/5'>
                  <h4 className='font-bold mb-4'>{`PILIHAN GANDA`}</h4>
                  <RadioGroup defaultValue='a'>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='a' id='r1' />
                      <Textarea
                        className='col-span-2'
                        placeholder='Masukan soal disini.'
                      />
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='b' id='r2' />
                      <Textarea
                        className='col-span-2'
                        placeholder='Masukan soal disini.'
                      />
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='c' id='r2' />
                      <Textarea
                        className='col-span-2'
                        placeholder='Masukan soal disini.'
                      />
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='d' id='r2' />
                      <Textarea
                        className='col-span-2'
                        placeholder='Masukan soal disini.'
                      />
                    </div>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='e' id='r2' />
                      <Textarea
                        className='col-span-2'
                        placeholder='Masukan soal disini.'
                      />
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <Button
                variant='default'
                onClick={() => {
                  handleDeleteQuestion(_index)
                }}
                className='space-x-1'
              >
                <IconTrash size={18} /> <span>HAPUS</span>
              </Button>
            </div>
          ))}
        </div>
      </Main>
    </>
  )
}
