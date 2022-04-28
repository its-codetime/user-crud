import React from "react";
import Form from "../Form/Form";
import { useNavigate } from "react-router-dom";

const AddUser = ({ addUser }) => {
  const navigate = useNavigate();

  const formUtils = {
    submitName: "Add User",
    onSubmit: addUser,
    onCancel: () => {
      navigate("/dashboard/users");
    },
  };

  return (
    <>
      <Form formUtils={formUtils} />
    </>
  );
};

export default AddUser;
