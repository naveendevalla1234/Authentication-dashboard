import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const changePassword = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!oldPassword || !newPassword || !confirmPassword) {
      setError("Please fill all fields");
      return;
    }

    if (oldPassword !== user.password) {
      setError("Old password is incorrect");
      return;
    }

    if (newPassword.length < 8) {
      setError("New password must be at least 8 characters");
      return;
    }

    if (!/[A-Z]/.test(newPassword)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    if (!/[0-9]/.test(newPassword)) {
      setError("Password must contain at least one number");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match");
      return;
    }

    if (oldPassword === newPassword) {
      setError("New password must be different from old password");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const updatedUser = {
        ...user,
        password: newPassword,
      };

      localStorage.setItem("user", JSON.stringify(updatedUser));

      setLoading(false);
      setSuccess("Password changed successfully!");

      setTimeout(() => {
        navigate("/profile");
      }, 1000);
    }, 800);
  };

  return (
    <div className="auth-page">
      <div className="auth-card change-password-card">
        <h1>Change Password</h1>
        <p>Update your account password securely</p>

        {error && <div className="error">{error}</div>}

        {success && <div className="success">{success}</div>}

        <form onSubmit={changePassword}>

          <label>Current Password</label>

          <div className="password-box">
            <input
              type={showOld ? "text" : "password"}
              placeholder="Enter current password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowOld(!showOld)}
            >
              {showOld ? "Hide" : "Show"}
            </button>
          </div>

          <label>New Password</label>

          <div className="password-box">
            <input
              type={showNew ? "text" : "password"}
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
            >
              {showNew ? "Hide" : "Show"}
            </button>
          </div>

          <small className="password-hint">
            Minimum 8 characters, 1 uppercase letter and 1 number.
          </small>

          <label>Confirm New Password</label>

          <div className="password-box">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? "Hide" : "Show"}
            </button>
          </div>

          <button
            className="primary-btn"
            disabled={loading}
          >
            {loading ? "Updating..." : "Change Password"}
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

export default ChangePassword;