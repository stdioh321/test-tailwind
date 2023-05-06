import React, { FormEvent, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import Todo, { TodoProps } from './components/Todo';
function createRandomTodo(): TodoProps {
  const titles = ['Buy groceries', 'Do laundry', 'Clean the house', 'Go for a run', 'Finish project'];
  const contents = ['Remember to buy milk', 'Separate whites and colors', 'Vacuum the floors', 'Run 5 miles', 'Write documentation'];

  const randomIndex = (arr: any[]) => Math.floor(Math.random() * arr.length);

  return {
    id: uuidv4(),
    complete: false,
    content: contents[randomIndex(contents)],
  };
}



function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [todos, setTodos] = useState<TodoProps[]>([createRandomTodo()])

  function onSubmit(ev: any) {
    ev.preventDefault()
    const input = inputRef.current?.value;
    if (!input) return
    inputRef.current.value = ''
    setTodos((currTodos) => {
      return [...currTodos, { complete: false, content: input, id: uuidv4() }]
    })
  }

  function onToggleComplete(id: string) {
    setTodos(curr => curr.map(todo =>
      todo.id === id ? { ...todo, complete: !todo.complete } : todo
    ))
  }

  return (
    <div className="App">
      <div className="container mx-auto p-1 md:p-0">
        <div className="mb-2">
          <h1 className='text-4xl font-bold'>Todo list</h1>
        </div>
        <form onSubmit={onSubmit} className='form flex-col items-center'>
          <input type="text" placeholder='Content...' name='input' ref={inputRef} className='py-2 px-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent w-full' />
        </form>
        <div className="wrapper-todos mt-2 border-t-2 border-gray-500 grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4">
          {todos.map((todo, idx) => {
            return (<Todo {...todo} key={todo.id} onToggleComplete={onToggleComplete} />)
          })}
        </div>

      </div>


    </div>
  );
}

export default App;
