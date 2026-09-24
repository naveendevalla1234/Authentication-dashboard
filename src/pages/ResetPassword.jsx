import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();

  const resetEmail = localStorage.getItem("resetEmail");

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!resetEmail) {
      setError("Password reset session expired. Please try again.");
      return;
    }

    if (!password || !confirm) {
      setError("Please fill all fields");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    if (!/[0-9]/.test(password)) {
      setError("Password must contain at least one number");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user || user.email !== resetEmail) {
        setLoading(false);
        setError("User account not found");
        return;
      }

      const updatedUser = {
        ...user,
        password: password,
      };

      localStorage.setItem("user", JSON.stringify(updatedUser));

      localStorage.removeItem("resetEmail");
      localStorage.removeItem("isLoggedIn");

      setLoading(false);
      setSuccess("Password reset successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }, 800);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Reset Password</h1>

        <p>Create a new password for your account.</p>

        {error && <div className="error">{error}</div>}

        {success && <div className="success">{success}</div>}

        <form onSubmit={handleSubmit}>
          <label>New Password</label>

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <small className="password-hint">
            Minimum 8 characters, 1 uppercase letter and 1 number.
          </small>

          <label>Confirm Password</label>

          <div className="password-box">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm new password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? "Hide" : "Show"}
            </button>
          </div>

          <button className="primary-btn" disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;