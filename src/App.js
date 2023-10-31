import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { productData } from "./apis/Api";
import { Outlet, RouterProvider, ScrollRestoration, createBrowserRouter } from "react-router-dom";
import Card from "./pages/Card";
import Product from "./components/Product";
import Login from "./pages/Login";

export{
  createBrowserRouter,
  Outlet,
  ScrollRestoration,
  RouterProvider,
}from "react-router-dom";

const Layout =()=>{
  return(
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
     
    </div>
  );
};
const router = createBrowserRouter([{
  path:"/",
  element:<Layout />,
  children:[
    {
      path:"/",
      element:<Home />,
      loader: productData,    
    },
      {
        
     path : "/product/:id" ,
     element: <Product />,    },
    {
      path : "/card",
      element : <Card />
    },
    {
      path:"/login",
      element:<Login />
    },
   
  ],
  
},
]);
function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router}/>
  
      
    </div>
  );
}

export default App;
