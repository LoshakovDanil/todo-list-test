import { useEffect, useMemo, useState } from 'react'
import { nanoid } from 'nanoid'

import { ITask } from '../../types/types'
import { List } from './List/List'
import { NewTask } from './NewTask/NewTask'
import { Filter } from './Filter/Filter'

const initialData: ITask[] = [
  { id: nanoid(), message: 'wash dishes', status: false },
  { id: nanoid(), message: 'clean room', status: false },
  { id: nanoid(), message: 'sleep before 11pm', status: false },
  { id: nanoid(), message: 'mow the lawn', status: true }
]

export const Todo = () => {
  const storageData = localStorage.getItem('todoList')
  const [data, setData] = useState<ITask[]>  (storageData ? JSON.parse(storageData) : initialData)  
  const [doneStatus, setDoneStatus] = useState(false)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    localStorage.setItem('todoList',JSON.stringify(data))
  },[data])

  const toggleMessageStatus = (id: string) => {
    setData(data => {
      return data.map(item  => {
        if (item.id !== id){
          return item;
        }
        return { ...item, status: !item.status };
      });
    });
  };

  const filteredTasks = useMemo(() => {
    return data.filter(task => {
      if (doneStatus && !task.status) {
        return false
      }
      return task.message
        .toLowerCase()
        .includes(filter.toLowerCase())
    })
  }, [data, filter, doneStatus])

  const addNewTask = (message: string) =>{
    setData((data: ITask[]) =>[
      ...data,
      {id: nanoid(), message, status:false}
    ])
    
  }

  return (
    <div>
      <Filter 
        onFilterChange={setFilter} 
        setDoneStatus={setDoneStatus} 
      />

      <List
        toggleMessageStatus={toggleMessageStatus}
        tasks={filteredTasks}
      />

      <NewTask 
        addNewTask={addNewTask}
      />
    </div>
  )
}






