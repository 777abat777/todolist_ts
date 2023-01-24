import { FiltredValuesType } from "../App"

export type TodoDataType = {
   id: number,
   deal: string,
   completed: boolean,
}

type PropsType = {
   title: string,
   todoData: Array<TodoDataType>,
   removeTask: (id: number) => void,
   changeFilter: (currentFilter: FiltredValuesType) => void
}

const TodoList = (props: PropsType) => {
   let todoElements = props.todoData.map(
      (el) =>
         <li>
            <input type="checkbox" checked={el.completed} key={el.id} />
            {el.deal}
            <button onClick={() => { props.removeTask(el.id) }}>X</button>
         </li>
   )
   return (
      <div className='Todo'>
         <h2>{props.title}</h2>
         <div className='adding'>
            <input type="text" />
            <button>+</button>
         </div>
         <ul>
            {todoElements}
         </ul>
         <div>
            <button onClick={() => { props.changeFilter('all') }}>All</button>
            <button onClick={() => { props.changeFilter('active') }}>Active</button>
            <button onClick={() => { props.changeFilter('completed') }}>Completed</button>
         </div>
      </div>
   )
}

export default TodoList