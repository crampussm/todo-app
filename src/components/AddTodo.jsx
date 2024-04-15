import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import CloseIcon from "@mui/icons-material/Close";

function AddTodo(props) {
  // Initializing input state variable
  const [input, setInput] = useState({ name: "", details: "" });
  const dispatch = useDispatch();

  // Function to add Todo
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput({ name: "", details: "" });
    props.handleAddTaskPopup();
  };

  return (
    <div className="popup">
      <span className="close-tab">
        <h3>Add</h3>
        <CloseIcon
          style={{ cursor: "pointer" }}
          onClick={props.handleAddTaskPopup}
        />
      </span>
      <form onSubmit={addTodoHandler} className="addtask">
        <div className="input-field">
          <label htmlFor="todo-name">Todo Name</label>
          <input
            id="todo-name"
            type="text"
            className="input"
            placeholder="Enter a the Todo name..."
            value={input.name}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
          />
        </div>
        <div className="input-field">
          <label htmlFor="todo-name">Details</label>
          <textarea
            name="details"
            placeholder="Enter task details..."
            className="input-textarea"
            id=""
            cols="30"
            rows="8"
            value={input.details}
            onChange={(e) => setInput({ ...input, details: e.target.value })}
          ></textarea>
        </div>
        <button className="btn" type="submit">
          Done
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
