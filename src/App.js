import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddAgenda from './components/AddAgenda';
import EditAgenda from './components/EditAgenda';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StateProvider } from './contexts/AgendaContext';

function App() {
  return (
    <div className="App">
     <StateProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add' element={<AddAgenda/>}/>
            <Route path='/edit/:id' element={<EditAgenda/>}/>
          </Routes>
        </Router>
      </StateProvider>
    </div>
  );
}

export default App;
