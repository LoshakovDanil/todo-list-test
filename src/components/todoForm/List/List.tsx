import { ListItem } from './ListItem'
import { ITask } from '../../../types/types'

type Props = {
  tasks: ITask[]
  toggleMessageStatus(id: string): void
}

export const List = ({toggleMessageStatus, tasks}: Props) => {
  return (
    <div className='list'>
      {tasks.map((task) =>(
        <ListItem 
          key={task.id}
          toggleMessageStatus={toggleMessageStatus}
          task={task}
        />
      ))}
    </div>
  )
}