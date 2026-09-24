import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.email !== email.trim()) {
      setError("Email not found");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("resetEmail", email.trim());
      setLoading(false);
      navigate("/reset-password");
    }, 800);
  };

  return (
    <div className="auth-page">
      <div className="forgot-card">

        {/* Icon */}
        <div className="forgot-icon">🔐</div>

        {/* Heading */}
        <h1>Forgot Password?</h1>

        <p className="forgot-subtitle">
          Don't worry! Enter your registered email address
          and we'll help you reset your password.
        </p>

        {/* Error */}
        {error && (
          <div className="error forgot-error">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className="primary-btn forgot-btn"
            disabled={loading}
          >
            {loading ? "Checking..." : "Continue"}
          </button>

        </form>

        <div className="back-login">
          <Link to="/login">
            ← Back to Login
          </Link>
        </div>

        <div className="security-note">
          🔒 Your account information is kept secure.
        </div>

      </div>
    </div>
  );
}

export default ForgotPassword;