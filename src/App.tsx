import React from "react";
import Home from "./pages/Home";
import Header from "./components/layout/header";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="app h-screen w-screen font-body bg-surface text-font-primary">
      {/* <Home /> */}
      <Landing />
    </div>
  );
}

export default App;
