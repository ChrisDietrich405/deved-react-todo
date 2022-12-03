import { GrAdd } from "react-icons/gr";

export const Form = ({ setStatus, inputText, setInputText, todoList, todosFunc }) => {
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault()
    console.log("hello")
    todosFunc([
      ...todoList,
      {
        todo: inputText,
        completed: false,
        id: new Date()
      },
    ]);
    setInputText("")
  };

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <form>
      <input
        type="text"
        value={inputText}
        onChange={handleInputText}
        className="todo-input"
      />
      <button onClick={addTodo} type="submit" className="todo-button">
        <GrAdd style={{ width: "10px" }} />
      </button>
      <select onChange={statusHandler} name="todos" className="filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </form>
  );
};

export default Form;
