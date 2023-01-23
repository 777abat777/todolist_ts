export type TodoDataType = {
   id: number,
   deal: string,
   completed: boolean
}

type PropsType = {
   title: string,
   todoData: Array<TodoDataType>
}

const TodoList = (props: PropsType) => {
   let todoElements = props.todoData.map(
      (el) =>
         <li>{el.deal}<input type="checkbox" checked={el.completed} key={el.id} /></li>
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
      </div>
   )
}

export default TodoList