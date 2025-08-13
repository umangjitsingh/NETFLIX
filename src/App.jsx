import './App.css'
import Layout from "./COMPONENTS/Layout.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Hero from "./PAGES/Hero.jsx";
import Login from "./PAGES/Login.jsx";
import {Provider} from "react-redux";
import appStore from "./REDUX-STORE-SLICE/appStore.js";
import Browse from "./PAGES/Browse.jsx";
import Play from "./PAGES/Play.jsx";



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
         },
            {
               path   : "/browse",
               element: <Browse/>
            },
            {
               path:'/play',
               element:<Play/>
            }
         ]
      },

   ])
   return (

      <Provider store={appStore}>
         <RouterProvider router={router}/>
      </Provider>


   )
}

export default App
