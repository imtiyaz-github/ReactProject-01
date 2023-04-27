import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UseList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);


  const addUsersHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <>
      <AddUser onAddUser={addUsersHandler} />
      <UseList users={usersList} />
    </>
  );
}

export default App;
