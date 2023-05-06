import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

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
            <label className='cursor-pointer' >
              <input className='hidden' type="checkbox" checked={complete} onChange={() => onToggleComplete && onToggleComplete(id)} />
              <FontAwesomeIcon className={`${complete ? 'text-blue-500' : ''}`} icon={complete ? faThumbsUp : faThumbsDown} />
            </label>
          </div>
          <div className="content col-span-11" title={id}>
            <div className={`${complete ? 'line-through text-blue-500' : ''}`}>{content}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo;
