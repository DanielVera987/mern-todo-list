import React, { useContext, useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import Login from "../Login";
import AuthContext from "../../context/AuthContext";
import tasks from "../../services/Tasks";

const Index = ({ tasksData }) => {
  const { isAuthenticated, token } = useContext(AuthContext);

  return (
    <div>
      {!isAuthenticated ? (
        <Login />
      ) : (
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h6 className="mb-3">Todo List</h6>

                    <Form />

                    <ul className="list-group mb-0">
                      {tasksData.length > 0
                        ? tasksData.map((el) => <List />)
                        : "No hay tareas"}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Index;
