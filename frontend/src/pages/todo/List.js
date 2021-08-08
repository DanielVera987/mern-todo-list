import React from "react";

const List = ({ id, complete, description, handleCheck, handleDelete }) => {
  return (
    <div>
      <li className="list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
        <div className="d-flex align-items-center">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value={id}
            aria-label="..."
            checked={complete === true ? "checked" : ""}
            onChange={handleCheck}
          />
          {complete ? <del>{description}</del> : description}
        </div>
        <button
          onClick={() => handleDelete(id)}
          data-mdb-toggle="tooltip"
          title="Remove item"
          className="btn"
        >
          <i className="fa fa-times text-primary"></i>
        </button>
      </li>
    </div>
  );
};

export default List;
