import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
