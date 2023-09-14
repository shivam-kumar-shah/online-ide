import React from "react";
import Home from "./pages/Home";
import Header from "./components/layout/header";

function App() {
  return (
    <div className="app h-screen w-screen font-body bg-surface text-font-primary flex flex-col">
      <Header />
      <Home />
    </div>
  );
}

export default App;
