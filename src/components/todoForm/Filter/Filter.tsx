import { FC } from "react"

interface Props {
  onFilterChange(e:string): void,
  setDoneStatus(status: boolean):void
}  

export const Filter: FC<Props> = ({onFilterChange, setDoneStatus}) => {
  return (
    <div>
      <input placeholder='Search...' onChange={(e) => onFilterChange(e.target.value)}/>
      <button onClick={() => setDoneStatus(true)}>done</button>
      <button onClick={() => setDoneStatus(false)}>all</button>
    </div>
  )
}