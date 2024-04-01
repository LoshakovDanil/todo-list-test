import cn from "classnames";

import { ITask } from "../../../types/types"

type Props = {
  task: ITask
  toggleMessageStatus(id: string): void
}

export const ListItem = ({task, toggleMessageStatus}: Props) =>{
  const {id, message, status} = task
  return (
    <div
      className={cn('list-item',{
        'complete': status
      })}
      onClick={() => toggleMessageStatus(id)}
    >
      {message}
    </div>
  )
}