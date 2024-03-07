import React from "react";
import "./edit.css";
function EditData(props) {
  const { closeModal, editDataTitle, update, setEditDataTitle } = props;

  return (
    <>
      <div className="modal">
        <div className="modal-container">
          <div className="modal-header">
            <h1>Edit Task</h1>
            <p className="close" onClick={closeModal}>
              &times;
            </p>
          </div>
          <div className="modal-content">
            <input
              type="text"
              value={editDataTitle}
              onChange={(e) => setEditDataTitle(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button className="btn btn-update" onClick={()=> {
              closeModal();
              update()
            }}>
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditData;
