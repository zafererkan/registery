
import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery';
import GeneralForm from './components/GeneralForm';
import Registery from './components/Registery';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<GeneralForm/>}/>
        <Route path='/registery' element={<Registery/>}/>
      </Routes>     
    </div>
  );
}

export default App;
