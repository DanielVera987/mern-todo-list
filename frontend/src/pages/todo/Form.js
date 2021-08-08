import React from "react";

const Form = ({ handleNewTask, handleChange, form }) => {
  return (
    <>
      <form
        className="d-flex justify-content-center align-items-start mb-2"
        onSubmit={handleNewTask}
      >
        <div className="form-outline flex-fill">
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={form.description}
            className="form-control form-control-lg"
          />
          <label className="form-label" htmlFor="form1">
            ¿Que necesitas hacer hoy?
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn-lg ms-2">
          Agregar
        </button>
      </form>
    </>
  );
};

export default Form;
