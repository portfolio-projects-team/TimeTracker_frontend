import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Dashboard from './components/Dashboard.tsx';
// import CreateTask from './components/CreateTask.tsx';
import Navbar from "./components/Navbar.tsx";







const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
 
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  // {
  //   path: "/create",
  //   element: <CreateTask />,
  // },
  {
    path: "/navbar",
    element: <Navbar />,
  },
  
 
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



