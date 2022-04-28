import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const DeleteUser = ({ deleteUser, getUser }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = getUser(id);
  return (
    <div className="deletePage">
      <p>
        Are you sure you want to delete the user with username{" "}
        <span>{user.name}</span> and email id <span>{user.email}</span>?
      </p>
      <div className="buttonGroup">
        <button
          className="submit"
          onClick={() => {
            deleteUser(id);
            navigate("/dashboard/users");
          }}
        >
          Delete
        </button>
        <button
          className="cancel"
          onClick={() => {
            navigate("/dashboard/users");
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteUser;
