import React from "react";
import Home from "./pages/Home";
import Header from "./components/layout/header";
import Landing from "./pages/Landing";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Profile } from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    index: true,
  },
  {
    path: "/editor",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

function App() {
  return (
    <div className="app h-screen w-screen grid items-center font-body bg-surface text-font-primary">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
