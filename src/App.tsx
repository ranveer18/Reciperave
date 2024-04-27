import Addrecipe from "./Pages/Addrecipe";
import Home from "./Pages/Home"
import Login from "./Pages/Login";
import Signup from "./Components/Signup";
import Confirm from "./Components/Confirm";
import Contentinfo from "./Pages/Contentinfo";
import UserPage from "./Pages/UserPage";
import EditRecipe from "./Components/EditRecipe";
import Logout from "./Components/Logout";
// import Test from "./Components/DynamicInputFields";
Addrecipe
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Reciperave" element={<Home />} />
          <Route path="/Reciperave/addrecipe" element={<Addrecipe />} />
          <Route path="/Reciperave/login" element={<Login />} />
          <Route path="/Reciperave/Signup" element={<Signup />} />
          <Route path="/Reciperave/:id" element={<Contentinfo />} />
          <Route path="/Reciperave/UserPage" element={<UserPage />} />
          <Route path="/Reciperave/:id/editrecipe/:id" element={< EditRecipe />} />
          <Route path="/Reciperave/Confirm" element={<Confirm />} />
          <Route path="/Reciperave/logout" element={<Logout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

