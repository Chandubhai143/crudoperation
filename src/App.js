import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Todolist from './Todolist';
import './Todolist.css';
import Signup from './CrudOperation/SignUp';
import Crud from './CrudOperation/Crud';
import About from './CrudOperation/About';
import Services from './CrudOperation/Services';
import Contact from './CrudOperation/Contact';

function App() {
  return (
<>
    <Todolist />
    <Routes>

        <Route path="/" element={<Crud />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
</>
    
  )
}

export default App;
