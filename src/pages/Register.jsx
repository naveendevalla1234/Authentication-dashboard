import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Please fill all fields");
      return;
    }

    if (form.name.trim().length < 3) {
      setError("Name must be at least 3 characters");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (!/[A-Z]/.test(form.password)) {
      setError("Password needs one uppercase letter");
      return;
    }

    if (!/[0-9]/.test(form.password)) {
      setError("Password needs one number");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const existingUser = JSON.parse(localStorage.getItem("user"));

    if (
      existingUser &&
      existingUser.email.toLowerCase() === form.email.trim().toLowerCase()
    ) {
      setError("An account with this email already exists");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const newUser = {
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
      };

      localStorage.setItem("user", JSON.stringify(newUser));

      setLoading(false);
      setSuccess("Registration successful!");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }, 800);
  };

  return (
    <div className="auth-page">
      <div className="register-card">

        {/* Icon */}
        <div className="register-icon">✨</div>

        {/* Heading */}
        <h1>Create Account</h1>

        <p className="register-subtitle">
          Create your account and get started today.
        </p>

        {/* Error */}
        {error && (
          <div className="error register-message">
            ⚠️ {error}
          </div>
        )}

        {/* Success */}
        {success && (
          <div className="success register-message">
            ✓ {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          {/* Full Name */}
          <label>Full Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange}
          />

          {/* Email */}
          <label>Email Address</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />

          {/* Password */}
          <label>Password</label>

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create a password"
              value={form.password}
              onChange={handleChange}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <small className="password-hint">
            8+ characters, uppercase letter and number required
          </small>

          {/* Confirm Password */}
          <label>Confirm Password</label>

          <div className="password-box">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm your password"
              value={form.confirmPassword}
              onChange={handleChange}
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? "Hide" : "Show"}
            </button>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="primary-btn register-btn"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Login */}
        <p className="register-login">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>

        {/* Security */}
        <div className="security-note">
          🔒 Your information is securely stored.
        </div>

      </div>
    </div>
  );
}

export default Register;