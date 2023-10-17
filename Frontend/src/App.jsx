import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./components/Register";
import SignIn from "./components/SignIn";
import Account from "./components/Account";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/myAccount" element={<Account />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
