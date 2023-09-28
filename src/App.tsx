import React from "react";
import Home from "./pages/Home";
import Header from "./components/layout/header";
import Landing from "./pages/Landing";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Problems from "./pages/Problems";
import Profile from "./pages/Profile";

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
    path: "/problems",
    element: <Problems />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

function App() {
  return (
    <div className="app grid h-screen w-screen items-center bg-surface font-body text-font-primary">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
