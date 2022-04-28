import { useState } from "react";
import { nanoid } from "nanoid";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

// components
import Nav from "./components/Nav";
import Users from "./components/Dashboard/Users";
import User from "./components/User/User";

function App() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([
    {
      id: nanoid(),
      name: "user1",
      age: 30,
      email: "user1@gmail.com",
    },
    {
      id: nanoid(),
      name: "user2",
      age: 25,
      email: "user2@gmail.com",
    },
    {
      id: nanoid(),
      name: "user3",
      age: 29,
      email: "user3@gmail.com",
    },
    {
      id: nanoid(),
      name: "user4",
      age: 35,
      email: "user4@gmail.com",
    },
    {
      id: nanoid(),
      name: "user5",
      age: 47,
      email: "user5@gmail.com",
    },
  ]);

  const crudOps = {
    getUser: (id) => {
      return users.find((user) => user.id === id);
    },
    addUser: (user) => {
      user.id = nanoid();
      setUsers((users) => [...users, user]);
      navigate("/dashboard/users");
    },
    updateUser: (user) => {
      setUsers((users) => {
        return users.map((u) => (u.id === user.id ? user : u));
      });
      navigate("/dashboard/users");
    },
    deleteUser: (userId) => {
      setUsers((users) => {
        return users.filter((user) => user.id !== userId);
      });
      navigate("/dashboard/users");
    },
  };

  return (
    <div className="App">
      <header className="header">
        <Nav />
        <h1 className="heading">USERS CRUD</h1>
      </header>
      <main className="content">
        <Routes>
          <Route path="/dashboard/users" element={<Users users={users} />} />
          <Route path="/user/*" element={<User {...crudOps} />} />
          <Route path="*" element={<Navigate to={"/dashboard/users"} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
