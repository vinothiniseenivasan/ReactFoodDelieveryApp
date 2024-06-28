import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import ApiForImage from "./Components/ApiForImage";
import {  RouterProvider, createBrowserRouter  ,Outlet} from "react-router-dom";

import Contact from "./Components/Contact";
import About from "./Components/About";
import Error from "./Components/Error";


const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div className="app">
     
      <Header />
      <Outlet />
    </div>
  );
};

// root.render(<AppLayout />);

const appRouter = createBrowserRouter([
  {
     path    :  '/'  ,
     element :   <AppLayout />,

     children :[
      {
        path : '/' ,
        element: <Body />

      } ,
      {
        path  : '/about' ,
        element : <About />
    
      },
      {
        path : '/contact' ,
        element : <Contact />
      }
    ],
     errorElement :<Error />
  } 
 
]);


root.render(<RouterProvider   router = {appRouter} />)





