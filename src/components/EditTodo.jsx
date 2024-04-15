import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../features/todo/todoSlice";
import CloseIcon from "@mui/icons-material/Close";

function EditTodo(props) {
  // Initializing input variable
  const [input, setInput] = useState({
    id: props.todo.id,
    name: props.todo.name,
    details: props.todo.text,
  });
  const dispatch = useDispatch();

  // Function to edit todo
  const EditTodoHandler = (e) => {
    e.preventDefault();
    dispatch(updateTodo(input));
    setInput({ name: props.todo.name, details: props.todo.text });
    props.handleEditPopup();
  };

  return (
    <div className="popup">
      <span className="close-tab">
        <h3>Edit</h3>
        <CloseIcon
          style={{ cursor: "pointer" }}
          onClick={props.handleEditPopup}
        />
      </span>
      <form onSubmit={EditTodoHandler} className="addtask">
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

export default EditTodo;
