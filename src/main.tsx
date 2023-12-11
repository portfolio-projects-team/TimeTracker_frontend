import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Login.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Dashboard from './pages/Dashboard.tsx';
import Create from './pages/CreateTask.tsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/create",
    element: <Create />,
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);