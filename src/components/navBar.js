const NavBar = ({
  title,
  bgcolor = "bg-slate-900",
  signInWithGoogle,
  signOut,
  userData,
}) => {
  const handleLogin = async (event) => {
    event.preventDefault();
    await signInWithGoogle();
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    await signOut();
  };

  const navStyle = `flex items-center justify-around flex-wrap ${bgcolor} p-6`;
  return (
    <nav className={navStyle}>
      <div className="flex items-center flex-no-shrink text-white">
        <img src="/checked.png" alt="logo" className="w-16 bg-slate-50 mr-2" />
        <span className="font-semibold text-xl tracking-tight">{title}</span>
      </div>
      <div className="flex">
        {userData.isLoggedIn ? (
          <>
            <h4 className="p-2 mr-3 border border-white rounded text-white">
              Logged in as
              <span className="p-1"> {userData.username.toUpperCase()}</span>
            </h4>
            <button
              onClick={handleLogout}
              className="flex justify-center items-center font-light  p-2 border  rounded border-white  text-white"
            >
              Logout
              <img
                className="ml-2"
                src={userData.picture}
                height="30px"
                width="30px"
                alt="Profile"
              />
            </button>
          </>
        ) : (
          <button
            onClick={handleLogin}
            className="flex justify-center items-center font-light  p-2 border  rounded border-white  text-white"
          >
            Login
            <img
              className="ml-2"
              src="/google.png"
              height="30px"
              width="30px"
              alt="Google Icon"
            />
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
