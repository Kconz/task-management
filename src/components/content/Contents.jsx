import React from "react";
import { useState } from "react";
import "./content.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function Contents(props) {
  const {
    tasks,
    deleteTask,
    title,
    setTitle,
    handleSubmitTask,
    receiveEditId,
  } = props;

  //form state submit

  return (
    <>
      <div className="contents">
        <h2>Task Management</h2>
        <form onSubmit={handleSubmitTask}>
          <div className="form-control">
            <input
              type="text"
              placeholder="Add Task"
              onChange={(e) => setTitle(e.target.value)}
              className="input-task"
              value={title}
            />
            <button className="btn-add" type="submit">
              {/* {task? "Update" : "Add"} */}
              Add
            </button>
          </div>
        </form>
        <ul>
          {/* list of data (taks) and handle edit and delete */}
          {tasks.map((item) => (
            <li key={item.id} className="data-task">
              <h3>{item.task}</h3>
              <div className="menu">
                <FontAwesomeIcon
                  icon={faTrash}
                  size="2x"
                  onClick={() => deleteTask(item.id)}
                />
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  size="2x"
                  onClick={() => receiveEditId(item.id)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Contents;
