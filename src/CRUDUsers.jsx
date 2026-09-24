import { useEffect, useState } from "react";
import "./App.css";

function CRUDUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  // READ - GET
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Input Change
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // CREATE - POST and UPDATE - PATCH
  const handleSubmit = (event) => {
    event.preventDefault();

    // UPDATE USER
    if (editingId !== null) {
      fetch(
        `https://jsonplaceholder.typicode.com/users/${editingId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to update user");
          }

          return response.json();
        })
        .then((updatedUser) => {
          setUsers(
            users.map((user) =>
              user.id === editingId
                ? {
                    ...user,
                    ...formData,
                    ...updatedUser,
                  }
                : user
            )
          );

          setEditingId(null);

          setFormData({
            name: "",
            email: "",
            phone: "",
            website: "",
          });
        })
        .catch((error) => {
          setError(error.message);
        });

      return;
    }

    // CREATE USER - POST
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add user");
        }

        return response.json();
      })
      .then((newUser) => {
        const userWithId = {
          ...newUser,
          ...formData,
          id: Date.now(),
        };

        setUsers([...users, userWithId]);

        setFormData({
          name: "",
          email: "",
          phone: "",
          website: "",
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // EDIT USER
  const handleEdit = (user) => {
    setEditingId(user.id);

    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      website: user.website,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // DELETE USER
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) {
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete user");
        }

        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // CANCEL EDIT
  const handleCancel = () => {
    setEditingId(null);

    setFormData({
      name: "",
      email: "",
      phone: "",
      website: "",
    });
  };

  if (loading) {
    return (
      <div className="message">
        <h2>Loading users...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="message">
        <h2 className="error">{error}</h2>
      </div>
    );
  }

  return (
    <div className="crud-container">

      <h1>CRUD Operations - Users</h1>

      {/* ADD / UPDATE FORM */}
      <div className="form-container">

        <h2>
          {editingId !== null
            ? "Update User"
            : "Add New User"}
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Enter Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="website"
            placeholder="Enter Website"
            value={formData.website}
            onChange={handleChange}
            required
          />

          <div className="form-buttons">

            <button
              type="submit"
              className="submit-btn"
            >
              {editingId !== null
                ? "Update User"
                : "Add User"}
            </button>

            {editingId !== null && (
              <button
                type="button"
                className="cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>
            )}

          </div>

        </form>

      </div>

      {/* TABLE */}
      <div className="table-container">

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {users.map((user) => (
              <tr key={user.id}>

                <td>{user.id}</td>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>{user.phone}</td>

                <td>{user.website}</td>

                <td className="action-buttons">

                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default CRUDUsers;