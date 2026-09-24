import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const saveProfile = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    if (name.trim().length < 3) {
      setError("Name must be at least 3 characters");
      return;
    }

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const updatedUser = {
        ...user,
        name: name.trim(),
        email: email.trim(),
      };

      localStorage.setItem("user", JSON.stringify(updatedUser));

      setLoading(false);
      setSuccess("Profile updated successfully!");

      setTimeout(() => {
        navigate("/profile");
      }, 1000);
    }, 800);
  };

  return (
    <div className="auth-page">
      <div className="auth-card edit-profile-card">
        <h1>Edit Profile</h1>
        <p>Update your account information</p>

        {error && <div className="error">{error}</div>}

        {success && <div className="success">{success}</div>}

        <form onSubmit={saveProfile}>
          <label>Full Name</label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />

          <label>Email Address</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

          <button className="primary-btn" disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </button>

          <button
            type="button"
            className="secondary-btn"
            onClick={() => navigate("/profile")}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;