import { ChangeEvent, FormEvent, useState } from "react"

interface Props {
  addNewTask(text: string): void
}

export const NewTask = ({ addNewTask }: Props) => {
  const [text, setText] = useState('')


  const submit = (e: FormEvent) => {
    e.preventDefault()
    addNewTask(text)

    setText('')
  }
  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setText(value)

  }

  return (
    <form onSubmit={submit}>
      <input placeholder='add task' value={text} onChange={onChange} />
      <button type='submit'>add</button>
    </form>
  )
}













