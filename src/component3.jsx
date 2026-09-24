import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFormData } from "./redux/formSlice";

function FormComponent() {
  const dispatch = useDispatch();

  const [formData, setFormDataLocal] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormDataLocal({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setFormData(formData));

    alert("Form data saved to Redux Store!");
  };

  return (
    <div className="form-container">
      <h2>Component A - Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
          required
        />

        <button type="submit">Save Data</button>
      </form>
    </div>
  );
}

export default FormComponent;