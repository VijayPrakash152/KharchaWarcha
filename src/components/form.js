import { createSpend } from "../supabase";

const Form = ({ userData: { isLoggedIn, username, email } }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(email);
    if (!isLoggedIn) {
      alert("Please login to create new kharcha 😁");
      return;
    }

    const friends = [];
    if (event.target.vijay.checked) friends.push("Vijay");
    if (event.target.manish.checked) friends.push("Manish");
    if (event.target.abhishek.checked) friends.push("Abhishek");
    if (event.target.saurav.checked) friends.push("Saurav");
    if (event.target.chetan.checked) friends.push("Chetan");

    const title = event.target.title.value;
    const place = event.target.place.value;
    const amount = Number(event.target.amount.value);

    if (friends.length == 0) friends.push(username);

    await createSpend({ title, place, amount, friends, email: email });

    event.target.reset();

    // addTodo(event.target.todo.value);
    // event.target.todo.value = "";
  };
  return (
    <div className="w-full   h-auto mb-2 bg-slate-900 flex flex-col justify-center items-center">
      <h2 className="text-white font-light border w-3/4 text-center">
        Naya Kharcha
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-2/3 p-3 border mt-3 rounded border-slate-200"
      >
        <div className="form-group mb-6">
          <label
            htmlFor="title"
            className="form-label font-semibold inline-block mb-2 text-white"
          >
            Title
          </label>
          <input
            type="text"
            required
            className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          mb-2
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="title"
            aria-describedby="titleHelp"
            placeholder="Enter Title"
          />
          <label
            htmlFor="amount"
            className="form-label font-semibold inline-block mb-2 text-white"
          >
            Amount
          </label>
          <input
            type="number"
            required
            className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          mb-2
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="amount"
            aria-describedby="amountHelp"
            placeholder="Enter Amount"
          />
          <label
            htmlFor="place"
            className="form-label font-semibold inline-block mb-2 text-white"
          >
            Place
          </label>
          <input
            type="text"
            required
            className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          mb-2
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="place"
            aria-describedby="placeHelp"
            placeholder="Enter Place"
          />

          <input
            id="vijay"
            type="checkbox"
            value=""
            className="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="vijay"
            className="mx-2 text-sm font-medium text-white dark:text-gray-300"
          >
            Vijay
          </label>
          <input
            id="manish"
            type="checkbox"
            value=""
            className="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="manish"
            className="mx-2 text-sm font-medium text-white dark:text-gray-300"
          >
            Manish
          </label>

          <input
            id="saurav"
            type="checkbox"
            value=""
            className="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="saurav"
            className="mx-2 text-sm font-medium text-white dark:text-gray-300"
          >
            Saurav
          </label>

          <input
            id="abhishek"
            type="checkbox"
            value=""
            className="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="abhishek"
            className="mx-2 text-sm font-medium text-white dark:text-gray-300"
          >
            Abhishek
          </label>

          <input
            id="chetan"
            type="checkbox"
            value=""
            className="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="chetan"
            className="mx-2 text-sm font-medium text-white dark:text-gray-300"
          >
            Chetan
          </label>

          <small id="todoHelp" className="block mt-1 text-xs text-gray-600">
            We'll never share your data with anyone else.
          </small>
        </div>

        <button
          type="submit"
          className="
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
