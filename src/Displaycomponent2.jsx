import { useSelector } from "react-redux";

function DisplayComponent() {
  const formData = useSelector((state) => state.form.formData);

  return (
    <div className="display-container">
      <h2>Component B - Display Data</h2>

      <div className="data-box">
        <p>
          <strong>Name:</strong> {formData.name}
        </p>

        <p>
          <strong>Email:</strong> {formData.email}
        </p>

        <p>
          <strong>Phone:</strong> {formData.phone}
        </p>

        <p>
          <strong>City:</strong> {formData.city}
        </p>

        <p>
          <strong>Role:</strong> {formData.role}
        </p>
      </div>
    </div>
  );
}

export default DisplayComponent;