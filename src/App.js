import Form from './components/Form';
import './App.css';
import Table from './components/Table';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Update from './components/Update';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/" element={<Form />} />
          <Route path='/view' element={<Table />} />
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;