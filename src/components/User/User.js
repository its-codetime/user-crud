import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components
import Profile from "./Profile";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";

const User = ({ getUser, addUser, updateUser, deleteUser }) => {
  return (
    <>
      <Routes>
        <Route path="profile/:id" element={<Profile getUser={getUser} />} />
        <Route path="create" element={<AddUser addUser={addUser} />} />
        <Route
          path="edit/:id"
          element={<EditUser updateUser={updateUser} getUser={getUser} />}
        />
        <Route
          path="delete/:id"
          element={<DeleteUser deleteUser={deleteUser} getUser={getUser} />}
        />
        <Route path="*" element={<Navigate to={"/dashboard/users"} />} />
      </Routes>
    </>
  );
};

export default User;
