import React from "react";
import Home from "./pages/Home";
import Header from "./components/layout/header";
import Nav from "./components/layout/nav";

function App() {
  return (
    <div className="app h-screen w-screen font-body open">
      <Header />
      <Nav />
      <main className="main">Main Section</main>
    </div>
  );
}

export default App;
