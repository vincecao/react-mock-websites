import React from "react";
import NavBar from "./components/nav/NavBar";
import ThemeContextProvider from "./contexts/ThemeContext";
import "./index.css";
import Index from "./pages";

export default function App() {
  return (
    <div className="w-full min-h-screen">
      <ThemeContextProvider>
        <Index />
      </ThemeContextProvider>
    </div>
  );
}
