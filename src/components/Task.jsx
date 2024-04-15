import { useEffect, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { removeTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import EditTodo from "./EditTodo";
import Button from "@mui/material/Button";
import { markCompleteTodo } from "../features/todo/todoSlice";

function Task(props) {
  const [isDetailsDropDown, setIsDetailsDropDown] = useState(false);
  const [isEditPop, setIsEditPop] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const dispatch = useDispatch();

  // Function for task drop down
  const handleDetailsDropDown = () => {
    if (isDetailsDropDown) {
      setIsDetailsDropDown(false);
    } else {
      setIsDetailsDropDown(true);
    }
  };

  // Function for task edit popup
  const handleEditPopup = () => {
    if (isEditPop) {
      setIsEditPop(false);
    } else {
      setIsEditPop(true);
    }
  };

  // Function to mark todo as completed
  const handleMarkAsCompleted = (e) => {
    e.preventDefault();
    dispatch(markCompleteTodo(props.todo.id));
    setIsCompleted(true);
  };
  useEffect(() => {
    if (props.todo.status === "completed") {
      setIsCompleted(true);
    }
  }, []);
  return (
    <div className={`todo-comp ${isCompleted ? "completed-task" : ""}`}>
      <div className="todo-comp-top">
        <p className="text-white">{props.todo.name}</p>
        {!isCompleted && (
          <span
            className={`todo-comp-top-right ${isCompleted ? "w-20" : "w-12"}`}
          >
            <KeyboardArrowDownIcon
              style={{ cursor: "pointer" }}
              className={`${isDetailsDropDown ? "rotate-180" : ""}`}
              onClick={handleDetailsDropDown}
            />
            <EditIcon style={{ cursor: "pointer" }} onClick={handleEditPopup} />
            <DeleteForeverIcon
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(removeTodo(props.todo.id))}
            />
          </span>
        )}
        {isCompleted && (
          <span className="todo-comp-top-right">
            <p className="task-completed-msg">COMPLETED</p>
            <KeyboardArrowDownIcon
              style={{ cursor: "pointer" }}
              className={`${isDetailsDropDown ? "rotate-180" : ""}`}
              onClick={handleDetailsDropDown}
            />
            <DeleteForeverIcon
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(removeTodo(props.todo.id))}
            />
          </span>
        )}
      </div>
      {isDetailsDropDown && (
        <div className="todo-comp-bottom">
          <p>{props.todo.text}</p>
          <span className="todo-comp-bottom-mark">
            {!isCompleted && (
              <Button variant="text" onClick={handleMarkAsCompleted}>
                Mark as complete
              </Button>
            )}
          </span>
        </div>
      )}
      {isEditPop && (
        <EditTodo todo={props.todo} handleEditPopup={handleEditPopup} />
      )}
    </div>
  );
}

export default Task;
