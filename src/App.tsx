import Header from './components/Header'
import TaskList from './components/TaskList'
import AddTaskForm from './components/AddTaskForm'
import { useTasks } from './hooks/useTasks'
import './styles/styles.css'

const App: React.FC = () => {
  const { tasks, addTask, deleteTask, toggleCompleteTask } = useTasks();

  return (
    <div className="app-container">
      <Header />
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} toggleCompleteTask={toggleCompleteTask} />
    </div>
  );
};

export default App
