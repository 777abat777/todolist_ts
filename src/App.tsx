import { useState } from 'react';
import './App.css';
import TodoList, { TodoDataType } from './components/Todolist'

export type FiltredValuesType = "all" | "completed" | "active"

function App() {
   let [initialTasks, setTasks] = useState<Array<TodoDataType>>([
      { id: 1, deal: 'first', completed: true },
      { id: 2, deal: 'second', completed: false },
      { id: 3, deal: 'last', completed: true },
      { id: 4, deal: 'some', completed: true }
   ])
   let [filter, setFilter] = useState<FiltredValuesType>('all')

   let removeTask = (id: number) => {
      let filtredTasks = initialTasks.filter(el => el.id !== id)
      setTasks(filtredTasks)
   }
   let filteredTasks = initialTasks
   if (filter === "active") {
      filteredTasks = initialTasks.filter(el => !el.completed)
   }
   if (filter === 'completed') {
      filteredTasks = initialTasks.filter(el => el.completed)
   }
   let changeFilter = (currentFilter: FiltredValuesType) => {
      setFilter(currentFilter)
   }

   return (
      <div className="app">
         <TodoList title='language' todoData={filteredTasks} removeTask={removeTask} changeFilter={changeFilter} />
      </div >
   );
}

export default App;

