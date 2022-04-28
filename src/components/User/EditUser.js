import React from "react";
import Form from "../Form/Form";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = ({ updateUser, getUser }) => {
  const navigate = useNavigate();
  const params = useParams();
  const formUtils = {
    submitName: "Update User",
    onSubmit: updateUser,
    onCancel: () => {
      navigate("/dashboard/users");
    },
  };

  return (
    <>
      <Form formData={getUser(params.id)} formUtils={formUtils} />
    </>
  );
};

export default EditUser;
