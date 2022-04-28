import React from "react";
import { useNavigate } from "react-router-dom";

const Users = ({ users }) => {
  const navigate = useNavigate();
  return users.length > 0 ? (
    <table className="table">
      <thead>
        <tr>
          <td>Name</td>
          <td>Age</td>
          <td>email</td>
          <td colSpan="3">Actions</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
            <td>
              <button
                className="profile"
                onClick={() => {
                  navigate(`/user/profile/${user.id}`);
                }}
              >
                View Profile
              </button>
            </td>
            <td>
              <button
                className="edit"
                onClick={() => {
                  navigate(`/user/edit/${user.id}`);
                }}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                className="delete"
                onClick={() => {
                  navigate(`/user/delete/${user.id}`);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div className="error">No users left. Fill out the form to add some.</div>
  );
};

export default Users;
