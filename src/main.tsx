// import React from "react";
// import ReactDOM from "react-dom/client";
// import Login from "./Login.tsx";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import App from "./App.tsx";
// import Dashboard from './pages/Dashboard.tsx';
// import Create from './pages/CreateTask.tsx';






// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//   },
//   {
//     path: "/create",
//     element: <Create />,
//   },
 
// ]);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./Login.tsx";
// import App from "./App.tsx";
// import Dashboard from './pages/Dashboard.tsx';
// import Create from './pages/CreateTask.tsx';
// import Navbar from "./Navbar.tsx";

// // eslint-disable-next-line react-refresh/only-export-components
// const Root = () => (
//   <Router>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/create" element={<Create />} />
//       <Route path="/navbar" element={<Navbar />} />
//       {/* Add a default route for unknown paths */}
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   </Router>
// );

// // eslint-disable-next-line react-refresh/only-export-components
// const NotFound = () => (
//   <div>
//     <h2>404 - Not Found</h2>
//     {/* Additional content or redirection logic can be added here */}
//   </div>
// );

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>
// );

// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, createBrowserRouter, createRoutesFromElements, Routes } from 'react-router-dom';
import Login from './Login.tsx';
import App from './App.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Create from './pages/CreateTask.tsx';
import RootLayout from './Layouts/RootLayout.tsx';


const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<RootLayout><Dashboard /></RootLayout>} />
      <Route path="/create" element={<Create />} />
    </Routes>
  </Router>
);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
