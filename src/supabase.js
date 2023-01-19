import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URI,
  process.env.REACT_APP_SUPABASE_ANONKEY
);

async function createSpend({
  title,
  place,
  amount,
  friends,
  email,
  dateofSpend,
}) {
  const { error } = await supabase
    .from("spends")
    .insert({ title, place, amount, friends, email, dateofSpend });

  if (error) alert("There was some error posting the data !");
}

async function signOut() {
  const { error } = await supabase.auth.signOut();
  alert("Signed Out Successfully!");
  return error;
}

async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth(
    {
      provider: "google",
    },
    {
      redirectTo: window.location.origin,
    }
  );

  // console.log(data);
}

async function getTodos() {
  const spends = await supabase.from("spends").select();
  // const spends = {
  //   error: null,
  //   data: [
  //     {
  //       id: 1,
  //       email: "vijay1@gmail.com",
  //       title: "First Todo1",
  //       description: "To use supabase to create a MVP1",
  //       dateofSpend: "2023-01-15",
  //       iscompleted: false,
  //       friends: null,
  //     },
  //     {
  //       id: 2,
  //       email: "vijay2@gmail.com",
  //       title: "First Todo2",
  //       description: "To use supabase to create a MVP2",
  //       dateofSpend: "2023-01-15",
  //       iscompleted: false,
  //       friends: null,
  //     },
  //     {
  //       id: 3,
  //       email: "vijay3@gmail.com",
  //       title: "First Todo3",
  //       description: "To use supabase to create a MVP3",
  //       dateofSpend: "2023-01-15",
  //       iscompleted: false,
  //       friends: null,
  //     },
  //     {
  //       id: 4,
  //       email: "vijay4@gmail.com",
  //       title: "First Todo4",
  //       description: "To use supabase to create a MVP4",
  //       dateofSpend: "2023-01-15",
  //       iscompleted: false,
  //       friends: null,
  //     },
  //     {
  //       id: 5,
  //       email: "vijay5@gmail.com",
  //       title: "First Todo5",
  //       description: "To use supabase to create a MVP5",
  //       dateofSpend: "2023-01-15",
  //       iscompleted: false,
  //       friends: null,
  //     },
  //   ],
  //   count: null,
  //   status: 200,
  //   statusText: "",
  // };
  // console.log("The todos are:- " + JSON.stringify(spends));
  return spends;
}

export { getTodos, supabase, signInWithGoogle, signOut, createSpend };
