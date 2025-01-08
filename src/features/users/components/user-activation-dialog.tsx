import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { SelectDropdown } from '@/components/select-dropdown'
import { useUsers } from '../context/users-context'
import { userStatus } from '../data/data'

const formSchema = z.object({
  status: z.string().min(1, { message: 'Status harus di isi.' }),
})

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ActivationDialog({ open, onOpenChange }: Props) {
  const { rowSelection, data } = useUsers()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { status: '' },
  })

  const onSubmit = () => {
    const status = form.getValues('status')

    if (status) {
      const _data = data.filter((_value, index) =>
        Object.keys(rowSelection).includes(`${index}`)
      )
      toast({
        title: 'You have imported the following file:',
        description: (
          <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
            <code className='text-white'>{JSON.stringify(_data, null, 2)}</code>
          </pre>
        ),
      })
    }
    onOpenChange(false)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        onOpenChange(val)
        form.reset()
      }}
    >
      <DialogContent className='sm:max-w-sm gap-2'>
        <DialogHeader className='text-left'>
          <DialogTitle>Ubah status user</DialogTitle>
          <DialogDescription>
            Harap pastikan data sudah benar.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form id='task-import-form' onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name='status'
              render={({ field }) => (
                <FormItem className='grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0'>
                  <SelectDropdown
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    placeholder='Pilih status'
                    className='col-span-4'
                    items={userStatus.map(({ label, value }) => ({
                      label,
                      value,
                    }))}
                  />
                  <FormMessage className='col-span-4 col-start-3' />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter className='gap-2 sm:gap-0'>
          <Button variant='outline' type='submit' form='task-import-form'>
            Simpan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
