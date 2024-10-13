import React from "react";
import Dashboard from "./components/dashboard/dashboard";
import Header from "./header/header";
import "./reset.css"

function App() {
  return (
    <div className="meowsic__container">
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;
