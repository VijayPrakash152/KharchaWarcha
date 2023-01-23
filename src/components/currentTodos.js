import ToggleCard from "./toggleCard";
const CurrentTodos = ({ todos, handleTodos }) => {
  return (
    <div className="flex bg-slate-900 p-4  w-full flex-col justify-center items-center">
      <h2 className="text-white font-light border w-2/3 text-center">
        All Kharchas -{" "}
      </h2>
      <div className="flex flex-col justify-center items-center w-full ">
        {todos.map((todo, index) => {
          return <ToggleCard todo={todo} key={index} />;
        })}
      </div>
    </div>
  );
};

export default CurrentTodos;
