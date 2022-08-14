import React from "react";
import "./App.css";
import Admin from "./app/component/admin";
import Customer from "./app/component/customer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Customer />
        <Admin />
      </header>
    </div>
  );
}

export default App;
