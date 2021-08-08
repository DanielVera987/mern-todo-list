import React from "react";
import "./App.css";
import Index from "./pages/todo/Index";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#272727" }}>
      <AuthProvider>
        <Index />
      </AuthProvider>
    </div>
  );
}

export default App;
