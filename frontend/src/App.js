import React, { useState, useEffect } from "react";
import "./App.css";
import Index from "./pages/todo/Index";
import { AuthProvider } from "./context/AuthContext";
import tasks from "./services/Tasks";

function App() {
  const [tasksData, setTasksData] = useState(null);

  useEffect(() => {
    const data = async () => {
      if (localStorage.getItem("token")) {
        const res = await tasks.all();
        setTasksData(res.data);
        console.log("token");
      }
    };

    data();
  }, []);

  return (
    <div className="container-fluid" style={{ backgroundColor: "#272727" }}>
      <AuthProvider>
        <Index tasksData={tasksData} />
      </AuthProvider>
    </div>
  );
}

export default App;
