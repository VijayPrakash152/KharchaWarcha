//eslint-ignore
import { getTodos, signInWithGoogle, signOut, supabase } from "./supabase";

import { useState, useEffect } from "react";
import NavBar from "./components/navBar";
import CurrentTodos from "./components/currentTodos";
import Form from "./components/form";
import Footer from "./components/footer";

function App() {
  const [todos, setTodos] = useState([]);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    picture: "",
    isLoggedIn: false,
  });

  supabase.auth.onAuthStateChange((event, session) => {
    if (event == "SIGNED_IN") {
      const {
        user: {
          userMetaData: { email, full_name: username, picture },
        },
      } = session;
      setUserData({
        ...userData,
        email,
        username,
        picture,
        isLoggedIn: true,
      });
    } else if (event == "SIGNED_OUT") {
      setUserData({
        ...userData,
        username: "",
        email: "",
        picture: "",
        isLoggedIn: false,
      });
    }
  });

  const getUser = async () => {
    const { data, error } = await supabase.auth.getSession();
    // console.log("This message is from getUSer" + JSON.stringify(data));

    if (data.session) {
      return data.session.user;
    }

    return null;
  };

  useEffect(() => {
    (async () => {
      const { data } = await getTodos();

      const user = await getUser();
      if (user) {
        const {
          user_metadata: { email, full_name: username, picture },
        } = await getUser();

        setUserData({
          ...userData,
          email,
          username,
          picture,
          isLoggedIn: true,
        });
      }

      setTodos([...data]);
    })();
  }, []);

  return (
    <div className="App bg-slate-900">
      <NavBar
        title="Kharcha Warcha"
        signInWithGoogle={signInWithGoogle}
        userData={userData}
        signOut={signOut}
      />

      <CurrentTodos todos={todos} />
      <Form userData={userData} />
      <Footer />
    </div>
  );
}

export default App;
