import { useQuestions } from '../context/question-context'
import QuestionActionDialog from './question-action-dialog'
import { QuestionDeleteDialog } from './question-delete-dialog'

const QuestionDialog = () => {
  const { open, setOpen, currentQuestion, setCurrentQuestion } = useQuestions()

  return (
    <>
      <QuestionActionDialog
        key='question-add'
        open={open === 'add'}
        onOpenChange={() => setOpen('add')}
      />

      {currentQuestion && (
        <>
          <QuestionActionDialog
            key='question-edit'
            open={open === 'edit'}
            question={currentQuestion}
            onOpenChange={() => {
              setOpen('edit')
              setTimeout(() => {
                setCurrentQuestion(null)
              }, 500)
            }}
          />
          <QuestionDeleteDialog
            key='question-delete'
            open={open === 'delete'}
            question={currentQuestion}
            onOpenChange={() => {
              setOpen('delete')
              setTimeout(() => {
                setCurrentQuestion(null)
              }, 500)
            }}
          />
        </>
      )}
    </>
  )
}

export default QuestionDialog
