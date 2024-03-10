import { useState, useEffect, useContext } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Contents from "./components/content/Contents";
import EditData from "./components/EditData/EditData";

function App() {
  // open and close modal
  const [modalOpen, setModalOpen] = useState(false);
  //data tasks list
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  //theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "");
  // This is Title for new Task to Add in list
  const [title, setTitle] = useState("");
  // this is edit data task
  const [editDataTitle, setEditDataTitle] = useState("");
  //this get data task id to be edit
  const [editTaskId, setEditTaskId] = useState(null);
  // tasks storing to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const deleteTask = (id) => {
    const taskToDelete = tasks.filter((item) => item.id !== id);
    setTask(taskToDelete);
  };
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
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
      // console.log(localStorage.setItem([...tasks, newTask]));
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
      <div className={"App " + theme}>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
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
      </div>
    </>
  );
}

export default App;
