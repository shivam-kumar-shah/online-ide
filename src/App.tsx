import React from "react";
import Home from "./pages/Home";
import Header from "./components/layout/header";
import Landing from "./pages/Landing";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Problems from "./pages/Problems";
import Profile from "./pages/Profile";
import { Provider } from "react-redux";
import store from "./redux/store";
import { configureAxios } from "./api/axiosPrivate";

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

configureAxios(store);

function App() {
  return (
    <div className="app grid h-screen w-screen items-center bg-surface font-body text-font-primary">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
