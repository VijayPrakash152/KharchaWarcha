const CurrentTodos = ({ todos, handleTodos }) => {
  const handleChange = (event) => {
    handleTodos(event.target.id);
  };
  return (
    <div className="flex bg-slate-900 p-4  w-full flex-col justify-center items-center">
      <h2 className="text-white font-light border w-2/3 text-center">
        All Kharchas -{" "}
      </h2>
      {todos.map((todo, index) => {
        return (
          <div
            key={index}
            className="w-3/4 mt-2 p-6  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {todo.title}
            </h5>

            <p className="mb-4 font-normal text-black dark:text-gray-400">
              <span className="font-semibold  p-2 border rounded bg-green-600 text-white">
                Amount -
              </span>{" "}
              <span className="p-2 bg-slate-900 text-white">{todo.amount}</span>
            </p>
            <p className="mb-3 font-normal text-black dark:text-gray-400">
              <span className="font-semibold  p-2 border rounded bg-yellow-600 text-white">
                Place -
              </span>
              <span className="p-2 bg-slate-900 text-white">{todo.place}</span>
            </p>
            <h3 className="font-semibold w-1/4 bg-slate-900 text-white border rounded p-3">
              Kaun kaun tha -{" "}
            </h3>
            <div className="flex">
              {todo.friends.map((friend, index) => {
                return (
                  <p
                    key={index}
                    className="mb-3 p-3 font-semibold text-white bg-slate-600 dark:text-gray-400"
                  >
                    {friend}
                  </p>
                );
              })}
            </div>
            <button className="p-2 bg-slate-900 text-white font-light border rounded">
              Paid by - {todo.email}
              &#9745;
            </button>
            <button className="p-2 bg-slate-900 text-white font-light border rounded">
              Paid on - {todo.dateofSpend}
              &#9745;
            </button>
            <small className="block mt-1 text-xs text-gray-600">
              The date format is in YYYY-MM-DD format
            </small>
          </div>
        );
      })}
    </div>
  );
};

export default CurrentTodos;
