import React, { ChangeEventHandler } from 'react';

export interface TodoProps {
  id: string;
  complete: boolean;
  content?: string;
  onToggleComplete?: Function;
}

const Todo: React.FC<TodoProps> = ({ id, complete = false, content = '', onToggleComplete }) => {
  return (
    <div className='Todo'>
      <div className="wrapper-todo border border-gray-500 rounded p-2">
        <div className="body grid grid-cols-12">
          <div className="complete col-span-1">
            <input type="checkbox" checked={complete} onChange={() => onToggleComplete && onToggleComplete(id)} />
          </div>
          <div className="content col-span-11" title={id}>
            <div>{content}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo;
