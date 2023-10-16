import './App.css'
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import Register from './components/Register';
import SignIn from './components/SignIn';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<SignIn />}></Route>
      </Routes>
    </Router>
  )
}

export default App
