import React from "react";
import Dashboard from "./components/dashboard/dashboard";
import "./components/header/header"
import "./reset.css"
import Header from "./components/header/header";

function App() {
  return (
    <div className="meowsic__container">
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;
