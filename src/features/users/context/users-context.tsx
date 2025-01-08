import React, { useState } from 'react'
import { RowSelectionState } from '@tanstack/react-table'
import useDialogState from '@/hooks/use-dialog-state'
import { User } from '../data/schema'

type UsersDialogType = 'invite' | 'add' | 'edit' | 'delete' | 'activation'

interface UsersContextType {
  open: UsersDialogType | null
  setOpen: (str: UsersDialogType | null) => void
  currentRow: User | null
  setCurrentRow: React.Dispatch<React.SetStateAction<User | null>>
  rowSelection: RowSelectionState
  setRowSelection: React.Dispatch<React.SetStateAction<object>>
  data: User[]
  setData: React.Dispatch<React.SetStateAction<User[]>>
}

const UsersContext = React.createContext<UsersContextType | null>(null)

interface Props {
  children: React.ReactNode
}

export default function UsersProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<UsersDialogType>(null)
  const [currentRow, setCurrentRow] = useState<User | null>(null)
  const [rowSelection, setRowSelection] = useState({})
  const [data, setData] = useState<User[]>([])

  return (
    <UsersContext
      value={{
        open,
        setOpen,
        currentRow,
        setCurrentRow,
        rowSelection,
        setRowSelection,
        data,
        setData,
      }}
    >
      {children}
    </UsersContext>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUsers = () => {
  const usersContext = React.useContext(UsersContext)

  if (!usersContext) {
    throw new Error('useUsers has to be used within <UsersContext>')
  }

  return usersContext
}
