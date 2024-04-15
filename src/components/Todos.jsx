import { useSelector } from "react-redux";
import Task from "./Task";

function Todos() {
  const todos = useSelector((state) => state.todos);
  // const todos = localStorage.getItem('todo-app-todos');
  return (
    <>
      <div style={{ fontWeight: "500", fontSize: "1.2rem" }}>Todos</div>
      <div className="todos">
        {todos &&
          todos.map((todo) => {
            return <Task key={todo.id} todo={todo} />;
          })}
      </div>
    </>
  );
}

export default Todos;
