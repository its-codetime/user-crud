import { useState } from "react";

const Form = ({ formData, formUtils }) => {
  const { submitName, onSubmit, onCancel } = formUtils;
  const [values, setValues] = useState(
    formData?.name
      ? formData
      : {
          name: "",
          age: "",
          email: "",
        }
  );

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      onChange={handleChange}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(values);
      }}
      className="userForm"
    >
      <div className="inputField">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          defaultValue={values.name}
          type="text"
          placeholder="name"
          required
        />
      </div>
      <div className="inputField">
        <label htmlFor="age">age</label>
        <input
          name="age"
          defaultValue={values.age}
          type="number"
          min={16}
          max={80}
          placeholder="age"
          required
        />
      </div>
      <div className="inputField">
        <label htmlFor="email">email</label>
        <input
          name="email"
          defaultValue={values.email}
          type="email"
          placeholder="email"
          required
        />
      </div>
      <div className="buttonGroup">
        <button className="submit" type="submit">
          {submitName}
        </button>
        <button className="cancel" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;
