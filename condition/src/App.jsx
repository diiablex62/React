import { useState } from "react";
import "./App.css";
import Articles from "./Articles";
import Header from "./Header";

function App() {
const [user, setUser]= useState(false);

const toggleUser = () => {
  setUser(!user);
};

  return (
    <div className="flex flex-col">
      <Header userToHeader={user} toggleUserMethod={toggleUser}   />
      <Articles />
    </div>
  );
}

export default App;
