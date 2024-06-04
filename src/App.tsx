
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ToDoList from './components/ToDoList';
import './styles/styles.css'
import ProjectDescription from './components/ProjectDescription'
import Contact from './components/Contact';


const App = () => {
  return (
    <Router>
      <div >
        <nav className='navbar'>
          <ul>
            <li>
              <Link className="nav-link" to="/">Opis</Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">To-Do List</Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">Formularz</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ProjectDescription />} />
          <Route path="/about" element={<ToDoList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
