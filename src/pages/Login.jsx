import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const savedUser = JSON.parse(localStorage.getItem("user"));

      if (
        savedUser &&
        savedUser.email === email &&
        savedUser.password === password
      ) {
        localStorage.setItem("isLoggedIn", "true");

        if (remember) {
          localStorage.setItem("rememberMe", "true");
        } else {
          localStorage.removeItem("rememberMe");
        }

        navigate("/dashboard");
      } else {
        setError("Invalid email or password.");
        setLoading(false);
      }
    }, 700);
  };

  return (
    <div className="modern-login">

      {/* LEFT SIDE */}

      <section className="login-visual">

        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>

        <div className="visual-content">

          <div className="brand-logo">
            <span>H</span>
          </div>

          <div className="brand-title">
            HORIZON <span>HR</span>
          </div>

          <div className="visual-badge">
            ● HUMAN RESOURCE PLATFORM
          </div>

          <h1>
            Your people.
            <br />
            Your <span>workspace.</span>
          </h1>

          <p className="visual-description">
            A smarter way to manage your workforce,
            track attendance, handle leave and monitor
            employee performance.
          </p>


          {/* MINI CARDS */}

          <div className="mini-cards">

            <div className="mini-card">

              <div className="mini-icon purple">
                👥
              </div>

              <div>
                <strong>248</strong>
                <span>Employees</span>
              </div>

            </div>


            <div className="mini-card">

              <div className="mini-icon blue">
                ✓
              </div>

              <div>
                <strong>87%</strong>
                <span>Attendance</span>
              </div>

            </div>


            <div className="mini-card">

              <div className="mini-icon green">
                12
              </div>

              <div>
                <strong>12</strong>
                <span>Departments</span>
              </div>

            </div>

          </div>


          <div className="visual-footer">
            <span className="status-dot"></span>
            All systems operational
          </div>

        </div>

      </section>


      {/* RIGHT SIDE */}

      <section className="login-section">

        <div className="login-top">
          <span>Employee Portal</span>

          <button>
            Help Center ↗
          </button>
        </div>


        <div className="login-container">

          <div className="login-heading">

            <div className="welcome-icon">
              ✦
            </div>

            <div>
              <span className="small-heading">
                SECURE ACCESS
              </span>

              <h2>Welcome back</h2>

              <p>
                Sign in to access your HR workspace
              </p>
            </div>

          </div>


          {error && (
            <div className="login-error">
              {error}
            </div>
          )}


          <form onSubmit={handleLogin}>

            {/* EMAIL */}

            <div className="input-group">

              <label>Work email</label>

              <div className="input-box">

                <span className="field-icon">
                  @
                </span>

                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>

            </div>


            {/* PASSWORD */}

            <div className="input-group">

              <label>Password</label>

              <div className="input-box">

                <span className="field-icon">
                  ◈
                </span>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            {/* OPTIONS */}

            <div className="login-options">

              <label className="remember">

                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) =>
                    setRemember(e.target.checked)
                  }
                />

                <span>Keep me signed in</span>

              </label>

              <button
                type="button"
                className="forgot"
                onClick={() =>
                  alert("Forgot password feature coming soon.")
                }
              >
                Forgot password?
              </button>

            </div>


            {/* BUTTON */}

            <button
              type="submit"
              className="sign-in-btn"
              disabled={loading}
            >
              <span>
                {loading
                  ? "Signing in..."
                  : "Continue to workspace"}
              </span>

              {!loading && <b>→</b>}
            </button>


            {/* SECURITY */}

            <div className="security-note">

              <span className="shield">
                ✓
              </span>

              <span>
                Your connection is secure and encrypted
              </span>

            </div>

          </form>


          {/* BOTTOM INFO */}

          <div className="login-divider">
            <span></span>
            <p>Horizon HR</p>
            <span></span>
          </div>

          <div className="login-bottom">

            <span>
              New to the workspace?
            </span>

            <button
              type="button"
              onClick={() =>
                alert("Registration page coming soon.")
              }
            >
              Create account
            </button>

          </div>

        </div>


        <div className="copyright">
          © 2026 Horizon HR · Employee Management System
        </div>

      </section>

    </div>
  );
}

export default Login;