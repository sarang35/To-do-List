import React from "react";

function WorkBar(props) {
    let {description} = props
  return (
    <div>
      <div className="alert alert-secondary alert-dismissible fade show" role="alert">
        {description}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}

export default WorkBar;
