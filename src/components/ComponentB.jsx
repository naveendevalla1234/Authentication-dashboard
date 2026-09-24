import { useSelector } from "react-redux";

function ComponentB() {
  const formData = useSelector((state) => state.form);

  return (
    <div>
      <h2>Component B - Display Data</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{formData.name}</td>
            <td>{formData.email}</td>
            <td>{formData.phone}</td>
            <td>{formData.city}</td>
            <td>{formData.role}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ComponentB;