import Addrecipe from "./Pages/Addrecipe";
import Home from "./Pages/Home"
import Login from "./Pages/Login";
import Signup from "./Components/Signup";
import Confirm from "./Components/Confirm";
Addrecipe
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/addrecipe" element={<Addrecipe/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Confirm" element={<Confirm/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

