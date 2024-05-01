import Addrecipe from "./Pages/Addrecipe";
import Home from "./Pages/Home"
import Login from "./Pages/Login";
import Signup from "./Components/Signup";
import Confirm from "./Components/Confirm";
import Contentinfo from "./Pages/Contentinfo";
import UserPage from "./Pages/UserPage";
import EditRecipe from "./Components/EditRecipe";
import Logout from "./Components/Logout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addrecipe" element={<Addrecipe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/:id" element={<Contentinfo />} />
          <Route path="/UserPage" element={<UserPage />} />
          <Route path="/:id/editrecipe/:id" element={< EditRecipe />} />
          <Route path="/Confirm" element={<Confirm />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

