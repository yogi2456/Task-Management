import './App.css';
import AllTasks from './Pages/AllTasks';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ImportantTask from './Pages/ImportantTask';
import CompletedTask from './Pages/CompletedTask';
import InCompletedTask from './Pages/InCompletedTask';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
  return (
    <div className="bg-gray-900 text-white h-screen p-2 relative">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}>
          <Route index element={<AllTasks/>}/>
          <Route path='/important-task' element={<ImportantTask/>}/>
          <Route path='/completed-task' element={<CompletedTask/>}/>
          <Route path='/incompleted-task' element={<InCompletedTask/>}/>   
          </Route>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
