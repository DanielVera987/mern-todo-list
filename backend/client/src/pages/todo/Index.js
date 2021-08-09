import React, { useContext, useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import Login from "../Login";
import AuthContext from "../../context/AuthContext";
import tasks from "../../services/Tasks";

const initialForm = {
  description: "",
  title: "",
  complete: false,
};

const Index = () => {
  const { isAuthenticated, signOff } = useContext(AuthContext);
  const [tasksData, setTasksData] = useState({});
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      title: e.target.value,
    });
  };

  const handleNewTask = async (e) => {
    e.preventDefault();

    await tasks.create(form);
    getTasks();
    setForm(initialForm);
  };

  const handleCheck = async (e) => {
    const id = e.target.value;

    let task = tasksData.filter((task) => task.id === id ?? task);
    task = {
      complete: e.target.checked,
      description: task[0].description,
      title: task[0].title,
    };
    await tasks.update(id, task);
    getTasks();
  };

  const handleDelete = async (id) => {
    await tasks.delete(id);
    getTasks();
  };

  const getTasks = async () => {
    const res = await tasks.all();
    setTasksData(res.data);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getTasks();
    } else {
      setTasksData({});
    }
  }, [isAuthenticated]);

  return (
    <>
      {!isAuthenticated ? (
        <Login />
      ) : (
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <div className="d-flex justify-content-between">
                      <h3 className="mb-3">Todo List</h3>
                      <button
                        onClick={signOff}
                        className="btn btn-outline-secondary btn-sm"
                      >
                        Salir
                      </button>
                    </div>
                    <br />

                    <Form
                      handleChange={handleChange}
                      handleNewTask={handleNewTask}
                      form={form}
                    />

                    <ul className="list-group mb-0">
                      {tasksData != null && tasksData.length > 0
                        ? tasksData.map((el) => (
                            <List
                              id={el.id}
                              complete={el.complete}
                              description={el.description}
                              key={el.id}
                              handleCheck={handleCheck}
                              handleDelete={handleDelete}
                            />
                          ))
                        : tasksData != null
                        ? "No hay tareas"
                        : "Problemas de conexión"}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Index;
