import React from "react";
import "./App.css";
import Portfolio from "./components/Portfolio";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Portfolio />
      </div>
    </ThemeProvider>
  );
}

export default App;