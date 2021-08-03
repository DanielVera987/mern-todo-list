import React from "react";

const Form = () => {
  return (
    <>
      <form className="d-flex justify-content-center align-items-start mb-2">
        <div className="form-outline flex-fill">
          <input
            type="text"
            id="form1"
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
