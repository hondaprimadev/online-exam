import { useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import {
  IconAdjustmentsHorizontal,
  IconEdit,
  IconEyeEdit,
  IconSortAscendingLetters,
  IconSortDescendingLetters,
  IconTrash,
} from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { useQuestions } from '../context/question-context'
import { questions } from '../data/data'
import ButtonQuestion from './button-question'

const QuestionContent = () => {
  const { setCurrentQuestion, setOpen } = useQuestions()
  const navigate = useNavigate()

  const [sort, setSort] = useState('ascending')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredQuestions = questions
    .sort((a, b) =>
      sort === 'ascending'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    )
    .filter((app) => app.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const handleEdit = (id: string) => {
    const _data = filteredQuestions.find((_q) => _q.id === id)

    if (_data)
      setCurrentQuestion({
        desc: _data.desc,
        id: _data.id,
        name: _data.name,
      })
    setOpen('edit')
  }

  const handleDelete = (id: string) => {
    const _data = filteredQuestions.find((_q) => _q.id === id)

    if (_data)
      setCurrentQuestion({
        desc: _data.desc,
        id: _data.id,
        name: _data.name,
      })
    setOpen('delete')
  }

  return (
    <>
      <div className='my-4 flex items-end justify-between sm:my-0 sm:items-center'>
        <div className='flex flex-col gap-4 sm:my-4 sm:flex-row'>
          <Input
            placeholder='Filter apps...'
            className='h-9 w-40 lg:w-[250px]'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <ButtonQuestion />
        </div>
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className='w-16'>
            <SelectValue>
              <IconAdjustmentsHorizontal size={18} />
            </SelectValue>
          </SelectTrigger>
          <SelectContent align='end'>
            <SelectItem value='ascending'>
              <div className='flex items-center gap-4'>
                <IconSortAscendingLetters size={16} />
                <span>Ascending</span>
              </div>
            </SelectItem>
            <SelectItem value='descending'>
              <div className='flex items-center gap-4'>
                <IconSortDescendingLetters size={16} />
                <span>Descending</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Separator className='shadow' />
      <ul className='faded-bottom no-scrollbar grid gap-4 overflow-auto pb-16 pt-4 md:grid-cols-2 lg:grid-cols-3'>
        {filteredQuestions.map((q) => (
          <li key={q.id} className='rounded-lg border p-4 hover:shadow-md'>
            <div className='mb-8 flex items-center justify-between'>
              <div className='flex flex-row gap-1'>
                <div
                  className={`flex size-10 items-center justify-center rounded-lg bg-muted p-2`}
                >
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={() => {
                      handleDelete(q.id)
                    }}
                  >
                    <IconTrash />
                  </Button>
                </div>
                <div
                  className={`flex size-10 items-center justify-center rounded-lg bg-muted p-2`}
                >
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={() => {
                      handleEdit(q.id)
                    }}
                  >
                    <IconEdit />
                  </Button>
                </div>
                <div
                  className={`flex size-10 items-center justify-center rounded-lg bg-muted p-2`}
                >
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={() => {
                      navigate({
                        to: `/questions/edit/${q.id}`,
                        viewTransition: true,
                      })
                    }}
                  >
                    <IconEyeEdit />
                  </Button>
                </div>
              </div>
              {/* <Button variant='outline' size='sm'>
                Ujian
              </Button> */}
            </div>
            <div>
              <h2 className='mb-1 font-semibold'>{q.name}</h2>
              <p className='line-clamp-2 text-gray-500'>{q.desc}</p>
              <p className='line-clamp-2 text-gray-700'>
                {new Date().toLocaleString('id-ID')}
              </p>
              <p className='line-clamp-2 text-gray-700'>
                Maker: {q.maker.name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default QuestionContent
