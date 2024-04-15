import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Button from "@mui/material/Button";

function App() {
  const [isAddTaskPop, setIsAddTaskPop] = useState(false);
  const handleAddTaskPopup = () => {
    if (isAddTaskPop) {
      setIsAddTaskPop(false);
    } else {
      setIsAddTaskPop(true);
    }
  };
  return (
    <>
      <div className="container">
        <div className="top">
          <h2 className="top-heading">Todo App</h2>
          <Button variant="outlined" onClick={handleAddTaskPopup}>
            Add Tasks
          </Button>
        </div>
        {isAddTaskPop && (
          <AddTodo
            handleAddTaskPopup={handleAddTaskPopup}
            setIsAddTaskPop={setIsAddTaskPop}
          />
        )}
        <Todos />
      </div>
    </>
  );
}

export default App;
