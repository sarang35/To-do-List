import React from 'react'
import "./Box.css";
import Search from './Search';

function Box() {
  return (
    <div className="whole d-flex justify-content-center align-items-center vh-100">
      <div className=" mybox bg-white text-primary p-4 rounded">
        <strong>To-do List</strong>
        <Search />
      </div>
    </div>
  );
}

export default Box
