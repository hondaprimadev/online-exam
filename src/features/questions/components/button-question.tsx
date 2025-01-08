import { IconTablePlus } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { useQuestions } from '../context/question-context'

const ButtonQuestion = () => {
  const { setOpen } = useQuestions()

  return (
    <Button
      variant={'outline'}
      onClick={() => {
        setOpen('add')
      }}
    >
      <IconTablePlus size={18} /> <span>Tambah Soal</span>
    </Button>
  )
}

export default ButtonQuestion
