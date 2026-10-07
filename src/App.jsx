
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserConextProvider";

import "./App.css";

function App() {

  return (
    <UserContextProvider>
      <h1>Learing React with Context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
