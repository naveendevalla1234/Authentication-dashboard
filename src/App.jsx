import React, { useState } from "react";

/* =========================
   LOGIN PAGE
========================= */

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("auth", "true");

      localStorage.setItem(
        "user",
        JSON.stringify({
          name: "Devalla Navin",
          email: email,
        })
      );

      if (remember) {
        localStorage.setItem("remember", "true");
      }

      setLoading(false);
      onLogin();
    }, 1000);
  };

  return (
    <div className="login-page">

      {/* Background Decorations */}
      <div className="background-circle circle-one"></div>
      <div className="background-circle circle-two"></div>
      <div className="background-circle circle-three"></div>

      {/* Header */}
      <header className="login-header">

        <div className="brand">

          <div className="brand-logo">
            ✦
          </div>

          <div className="brand-text">
            <strong>Naveen Workspace</strong>
            <span>Secure Workspace</span>
          </div>

        </div>

        <button className="help-button">
          Need help?
        </button>

      </header>

      {/* Main */}
      <main className="login-container">

        {/* LEFT SIDE */}
        <section className="intro-section">

          <div className="status-badge">
            <span className="status-dot"></span>
            SECURE ACCESS
          </div>

          <h1>
            Everything you need,
            <br />
            <span>in one place.</span>
          </h1>

          <p className="intro-description">
            Securely access your workspace, manage your
            account, and stay in control of your information.
          </p>

          <div className="benefits">

            <div className="benefit">

              <div className="benefit-icon">
                ✓
              </div>

              <div>
                <strong>Secure authentication</strong>
                <p>Your account stays protected.</p>
              </div>

            </div>

            <div className="benefit">

              <div className="benefit-icon">
                ⚡
              </div>

              <div>
                <strong>Fast & simple</strong>
                <p>Get to your workspace quickly.</p>
              </div>

            </div>

            <div className="benefit">

              <div className="benefit-icon">
                ◈
              </div>

              <div>
                <strong>Easy account management</strong>
                <p>Manage everything from one dashboard.</p>
              </div>

            </div>

          </div>

        </section>

        {/* LOGIN CARD */}
        <section className="login-card">

          <div className="login-icon">
            🔐
          </div>

          <div className="card-title">

            <h2>
              Welcome back
            </h2>

            <p>
              Sign in to continue to your account
            </p>

          </div>

          <form onSubmit={handleLogin}>

            {/* Error */}
            {error && (
              <div className="error-message">

                <span>!</span>

                {error}

              </div>
            )}

            {/* Email */}
            <div className="field">

              <label>
                Email address
                <span>*</span>
              </label>

              <div className="input-container">

                <span className="input-icon">
                  ✉
                </span>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />

              </div>

            </div>

            {/* Password */}
            <div className="field">

              <div className="password-heading">

                <label>
                  Password
                  <span>*</span>
                </label>

                <button
                  type="button"
                  className="forgot-button"
                >
                  Forgot password?
                </button>

              </div>

              <div className="input-container">

                <span className="input-icon">
                  🔒
                </span>

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

                <button
                  type="button"
                  className="show-button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>

            {/* Remember Me */}
            <div className="options">

              <label className="remember">

                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) =>
                    setRemember(e.target.checked)
                  }
                />

                <span>
                  Remember me
                </span>

              </label>

              <span className="session">
                14 day session
              </span>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >

              {loading ? (
                <>
                  <span className="loader"></span>
                  Signing in...
                </>
              ) : (
                <>
                  Sign in
                  <span className="arrow">
                    →
                  </span>
                </>
              )}

            </button>

          </form>

          {/* Divider */}
          <div className="divider">
            <span>OR</span>
          </div>

          {/* Register */}
          <div className="register-text">

            <span>
              Don't have an account?
            </span>

            <button>
              Create account
            </button>

          </div>

          {/* Security */}
          <div className="security-message">

            <span>🔒</span>

            Your information is encrypted and secure.

          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="login-footer">
        © 2026 Naveen Workspace · Privacy · Terms
      </footer>

    </div>
  );
}


/* =========================
   DASHBOARD
========================= */

function Dashboard({ onLogout }) {

  const user =
    JSON.parse(localStorage.getItem("user")) || {
      name: "Devalla Navin",
      email: "navin@example.com",
    };

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="dashboard-brand">

          <div className="brand-logo">
            ✦
          </div>

          <div>

            <strong>
              Naveen Workspace
            </strong>

            <span>
              Workspace
            </span>

          </div>

        </div>

        <nav>

          <button className="nav-item active">

            <span>
              ▦
            </span>

            Dashboard

          </button>

          <button className="nav-item">

            <span>
              ♙
            </span>

            Profile

          </button>

          <button className="nav-item">

            <span>
              🔒
            </span>

            Security

          </button>

        </nav>

        {/* Sidebar Bottom */}
        <div className="sidebar-bottom">

          <div className="user-info">

            <div className="avatar">
              {user.name.charAt(0)}
            </div>

            <div>

              <strong>
                {user.name}
              </strong>

              <span>
                {user.email}
              </span>

            </div>

          </div>

          <button
            className="logout-button"
            onClick={onLogout}
          >
            ↪ Logout
          </button>

        </div>

      </aside>


      {/* DASHBOARD CONTENT */}
      <main className="dashboard-content">

        <div className="dashboard-top">

          <div>

            <span className="dashboard-label">
              OVERVIEW
            </span>

            <h1>
              Dashboard
            </h1>

            <p>
              Welcome back! Here's what's happening today.
            </p>

          </div>

          <div className="dashboard-avatar">
            {user.name.charAt(0)}
          </div>

        </div>


        {/* SEARCH */}
        <div className="dashboard-search">

          <span>
            ⌕
          </span>

          <input
            placeholder="Search dashboard..."
          />

        </div>


        {/* STAT CARDS */}
        <div className="stats">

          <div className="stat-card">

            <div className="stat-icon purple">
              ♙
            </div>

            <span>
              Total Users
            </span>

            <h2>
              1,248
            </h2>

            <small>
              +12.5% this month
            </small>

          </div>


          <div className="stat-card">

            <div className="stat-icon blue">
              ↗
            </div>

            <span>
              Active Sessions
            </span>

            <h2>
              384
            </h2>

            <small>
              +8.2% this week
            </small>

          </div>


          <div className="stat-card">

            <div className="stat-icon green">
              ✓
            </div>

            <span>
              Successful Logins
            </span>

            <h2>
              98.6%
            </h2>

            <small>
              Last 30 days
            </small>

          </div>

        </div>


        {/* DASHBOARD PANELS */}
        <div className="dashboard-panels">

          {/* Recent Activity */}
          <div className="panel">

            <div className="panel-title">

              <div>

                <h2>
                  Recent activity
                </h2>

                <p>
                  Your latest account activity
                </p>

              </div>

              <button>
                View all
              </button>

            </div>


            <div className="activity">

              <span>
                ✓
              </span>

              <div>

                <strong>
                  Successful login
                </strong>

                <p>
                  Today, 10:32 AM
                </p>

              </div>

            </div>


            <div className="activity">

              <span>
                ♙
              </span>

              <div>

                <strong>
                  Profile updated
                </strong>

                <p>
                  Yesterday, 4:20 PM
                </p>

              </div>

            </div>


            <div className="activity">

              <span>
                🔒
              </span>

              <div>

                <strong>
                  Password changed
                </strong>

                <p>
                  Sep 22, 2026
                </p>

              </div>

            </div>

          </div>


          {/* Security */}
          <div className="panel">

            <h2>
              Security
            </h2>

            <p>
              Your account security status
            </p>

            <div className="security-progress">

              <div>

                <strong>
                  Good
                </strong>

                <span>
                  85%
                </span>

              </div>

              <div className="progress">

                <span></span>

              </div>

            </div>

            <button className="manage-button">
              Manage security
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}


/* =========================
   APP
========================= */

function App() {

  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("auth") === "true"
  );

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {

    localStorage.removeItem("auth");

    localStorage.removeItem("remember");

    setLoggedIn(false);

  };

  if (loggedIn) {

    return (
      <Dashboard
        onLogout={handleLogout}
      />
    );

  }

  return (
    <Login
      onLogin={handleLogin}
    />
  );
}

export default App;