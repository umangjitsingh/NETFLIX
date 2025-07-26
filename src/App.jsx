import './App.css'
import Layout from "./COMPONENTS/Layout.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Hero from "./PAGES/Hero.jsx";
import Login from "./PAGES/Login.jsx";



function App() {

   const router = createBrowserRouter([
      {
         element : <Layout/>,
         path    : "/",
         children: [{
            path:"/",
            element:<Hero/>
         }, {
            path   : "/login",
            element: <Login/>
         }]
      },

   ])
   return (

         <RouterProvider router={router}/>

   )
}

export default App
