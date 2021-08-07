import React from "react";

const List = ({ titile, description }) => {
  return (
    <div>
      <li className="list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
        <div className="d-flex align-items-center">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            aria-label="..."
            checked
          />
          {description}
        </div>
        <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
          <i className="fa fa-times text-primary"></i>
        </a>
      </li>
    </div>
  );
};

export default List;
