import {
  BrowserRouter as Router,
  
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,

} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App(){
 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" elements ={<Login/>} />
      <Route path="/Home" elements ={<Home/>} />
      <Route path="/signuo" elements ={<SignUp/>} />

    </Route>
  )
 )

 return(
  <RouterProvider router={router}/>
 )
}
export default App