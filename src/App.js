import React, { Children, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

import Contact from "./Components/Contact";
import About from "./Components/About";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";

import {Provider} from 'react-redux';
import appStore from "./Utils/appStore";
 import Cart from "./Components/Cart";
import { lazy } from "react";

import ".././style.css";
import UserContext from "./Utils/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const user = {
      nameInfo: "vinothini seeenivasan",
    };

    setUserName(user.nameInfo);
  }, []);

  return (
   <Provider  store={appStore}>
    <UserContext.Provider value={{ loginUserInformation: userName  , userName ,setUserName}}>
      <div className="app">
               <Header />
               <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
    
  );
};

// root.render(<AppLayout />);

const Grocery = lazy(() => import("./Components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        // /:resId => dynamic its differ for reataurant to restaurant
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1> Loading ....</h1>}>
            {" "}
            <Grocery />{" "}
          </Suspense>
        ),
      },
    ],
     errorElement: <Error />
  },
]);

root.render(<RouterProvider router={appRouter} />);
