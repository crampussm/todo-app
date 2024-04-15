import { useSelector } from "react-redux";
import Task from "./Task";

function Todos() {
  // Geting the all todos from the redux store
  const todos = useSelector((state) => state.todos);

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
