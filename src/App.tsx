import { useState } from 'react';
import './App.css';
import TodoList, { TodoDataType } from './components/Todolist'

let todoData1: Array<TodoDataType> = [
   { id: 1, deal: 'first', completed: true },
   { id: 2, deal: 'second', completed: false },
   { id: 3, deal: 'last', completed: true },
]
let todoData2: Array<TodoDataType> = [
   { id: 1, deal: 'deal', completed: true },
   { id: 2, deal: 'second', completed: false },
]

function App() {
   return (
      <div className="app">
         <TodoList title='language' todoData={todoData1} />
         <TodoList title='work' todoData={todoData2} />

      </div >
   );
}

export default App;

