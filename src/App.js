import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';

import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/" element={<Navigate to='/login' />} />
      </Routes>
    </div>
  );
}

export default App;
