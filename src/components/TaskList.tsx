import React from 'react';
import TaskItem from './TaskItem';
import { Task } from './Task';

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
  toggleCompleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask, toggleCompleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} toggleCompleteTask={toggleCompleteTask} />
      ))}
    </ul>
  );
};

export default TaskList;
