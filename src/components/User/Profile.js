import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Profile = ({ getUser }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { name, age, email } = getUser(id);
  return (
    <div className="profilePage">
      <h1>Profile</h1>
      <h2>
        <span>Name :</span> {name}
      </h2>
      <h2>
        <span>Age :</span> {age}
      </h2>
      <h2>
        <span>Email :</span> {email}
      </h2>
      <button
        className="update"
        onClick={() => {
          navigate(`/user/edit/${id}`);
        }}
      >
        Update Profile
      </button>
      <button
        className="cancel"
        onClick={() => {
          navigate("/dashboard/users");
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Profile;
