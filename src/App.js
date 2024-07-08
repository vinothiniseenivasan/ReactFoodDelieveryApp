import React, { Children, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import ApiForImage from "./Components/ApiForImage";
import {  RouterProvider, createBrowserRouter  ,Outlet} from "react-router-dom";

import Contact from "./Components/Contact";
import About from "./Components/About";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
// import Grocery from "./Components/Grocery";
import { lazy } from "react";
import Shimmer from "./Components/Shimmer";



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


const Grocery = lazy(() => import("./Components/Grocery"))

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
      } ,
      {
        // /:resId => dynamic its differ for reataurant to restaurant
        path :'/restaurants/:resId' ,
        element: <RestaurantMenu />
      
      } , 
      {
        path: '/grocery' ,
        element : <Suspense fallback = {<h1>  Loading ....</h1> } > <Grocery /> </Suspense>
      }

    ],
     errorElement :<Error />
  } 
 
]);


root.render(<RouterProvider   router = {appRouter} />)





