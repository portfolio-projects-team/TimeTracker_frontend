import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import TaskForm from "./TaskForm.tsx";






const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/TaskForm",
    element: <TaskForm />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);