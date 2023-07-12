
import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery';
import GeneralForm from './components/GeneralForm';
import Registery from './components/Registery';
import searchimages from './api';


function App() {



  const handleSubmit = (term) => {
    debugger;
    console.log(term);
    searchimages(term);
  };
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<GeneralForm/>}/>
        <Route path='/registery' element={<Registery Registery={handleSubmit} />} />
      </Routes>     
    </div>
  );
}

export default App;
