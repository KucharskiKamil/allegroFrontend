import React from 'react';
import { Task } from './Task';
import { AiOutlineCheckCircle, AiOutlineDelete } from 'react-icons/ai';

interface TaskItemProps {
  task: Task;
  deleteTask: (id: number) => void;
  toggleCompleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, deleteTask, toggleCompleteTask }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
        <div className={'text-display'}>
            <span className='topic'>{task.subject}</span>
            <span className='description'>{task.title}</span>
        </div>
        <div className='button-display'>
            <button onClick={() => toggleCompleteTask(task.id)} className='task-button'>
                <AiOutlineCheckCircle className="icon done-button" />
            </button>
            <button onClick={() => deleteTask(task.id)} className='task-button'>
                <AiOutlineDelete className="icon delete-button" />
            </button>
        </div>
      
    </li>
  );
};

export default TaskItem;
