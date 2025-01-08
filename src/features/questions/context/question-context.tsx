import React, { useState } from 'react'
import useDialogState from '@/hooks/use-dialog-state'
import { IQuestionForm } from '../data/type'

type QuestionDialogType = 'delete' | 'edit' | 'add'

interface IQuestionContext {
  open: QuestionDialogType | null
  setOpen: (str: QuestionDialogType | null) => void
  currentQuestion: IQuestionForm | null
  setCurrentQuestion: (str: IQuestionForm | null) => void
}

const QuestionsContext = React.createContext<IQuestionContext | null>(null)

interface Props {
  children: React.ReactNode
}

const QuestionProvider = ({ children }: Props) => {
  const [open, setOpen] = useDialogState<QuestionDialogType>(null)
  const [currentQuestion, setCurrentQuestion] = useState<IQuestionForm | null>(
    null
  )

  return (
    <QuestionsContext
      value={{
        open,
        setOpen,
        currentQuestion,
        setCurrentQuestion,
      }}
    >
      {children}
    </QuestionsContext>
  )
}

export default QuestionProvider

// eslint-disable-next-line react-refresh/only-export-components
export const useQuestions = () => {
  const questionsContext = React.useContext(QuestionsContext)

  if (!questionsContext) {
    throw new Error('useUsers has to be used within <questionsContext>')
  }

  return questionsContext
}
