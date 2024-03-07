import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Contents from "./components/content/Contents";
import EditData from "./components/EditData/EditData";

function App() {
  // open and close modal
  const [modalOpen, setModalOpen] = useState(false);
  //data tasks list
  const [tasks, setTask] = useState([
    { id: 1, task: "การบ้าน" },
    { id: 2, task: "งานบ้าน" },
    // { id: 3, task: "กรอกน้ำ" },
    // { id: 4, task: "กินข้าว" }
  ]);

  // This is Title for new Task to Add in list
  const [title, setTitle] = useState("");
  // this is edit data task
  const [editDataTitle, setEditDataTitle] = useState("");
  //this get data task id to be edit
  const [editTaskId, setEditTaskId] = useState(null);

  const deleteTask = (id) => {
    const taskToDelete = tasks.filter((item) => item.id !== id);
    setTask(taskToDelete);
  };

  const handleSubmitTask = (event) => {
    event.preventDefault();
    if (!title) {
      alert("Please enter a task");
    } else {
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        task: title,
      };
      setTask([...tasks, newTask]);
      setTitle("");
    }
  };

  // edit function
  const receiveEditId = (id) => {
    setModalOpen(true);
    editTask(id);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const editTask = (id) => {
    setEditTaskId(id);
    const editTaskFind = tasks.find((item) => item.id === id);
    setEditDataTitle(editTaskFind.task);
  };
  // Update function
  const update = () => {
    if (editTaskId) {
      const updateTask = tasks.map((item) => {
        //check id === edit id
        if (item.id === editTaskId) {
          return { ...item, task: editDataTitle };
        }
        return item;
      });
      setTask(updateTask);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Contents
          tasks={tasks}
          deleteTask={deleteTask}
          setTask={setTask}
          title={title}
          setTitle={setTitle}
          handleSubmitTask={handleSubmitTask}
          receiveEditId={receiveEditId}
        />

        {modalOpen && (
          <EditData
            closeModal={closeModal}
            editDataTitle={editDataTitle}
            editTask={editTask}
            update={update}
            setEditDataTitle={setEditDataTitle}
          />
        )}
      </div>
    </>
  );
}

export default App;
