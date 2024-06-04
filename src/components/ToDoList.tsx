import React from 'react';
import Header from './Header'
import TaskList from './TaskList'
import AddTaskForm from './AddTaskForm';
import { useTasks } from '../hooks/useTasks';
const ToDoList: React.FC = () => {
  const { tasks, addTask, deleteTask, toggleCompleteTask } = useTasks();
  return (
    <div className="app-container">
      <Header />
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleCompleteTask={toggleCompleteTask} />
    </div>
  );
};

export default ToDoList;