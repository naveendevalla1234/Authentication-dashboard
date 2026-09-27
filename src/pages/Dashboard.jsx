import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const [search, setSearch] = useState("");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [toast, setToast] = useState("");

  const employees = [
    {
      id: 1,
      name: "Aarav Sharma",
      role: "UI/UX Designer",
      department: "Design",
      status: "Active",
      initials: "AS",
    },
    {
      id: 2,
      name: "Priya Reddy",
      role: "HR Executive",
      department: "Human Resources",
      status: "Active",
      initials: "PR",
    },
    {
      id: 3,
      name: "Rahul Kumar",
      role: "Software Engineer",
      department: "Technology",
      status: "On Leave",
      initials: "RK",
    },
    {
      id: 4,
      name: "Sneha Patel",
      role: "Finance Analyst",
      department: "Finance",
      status: "Active",
      initials: "SP",
    },
  ];

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.role.toLowerCase().includes(search.toLowerCase()) ||
      employee.department.toLowerCase().includes(search.toLowerCase())
  );

  const confirmLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("rememberMe");

    setShowLogoutModal(false);
    setToast("Logged out successfully");

    setTimeout(() => {
      navigate("/login");
    }, 800);
  };

  const showMessage = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  return (
    <div className="hr-dashboard">

      {/* ================= SIDEBAR ================= */}
      <aside className="hr-sidebar">

        <div className="brand">
          <div className="brand-logo">✦</div>

          <div>
            <h2>Naveen</h2>
            <span>HR Workspace</span>
          </div>
        </div>

        <div className="sidebar-title">
          MAIN MENU
        </div>

        <nav className="sidebar-menu">

          <Link className="active-menu" to="/dashboard">
            <span>▦</span>
            Dashboard
          </Link>

          <Link to="/profile">
            <span>♙</span>
            Employees
          </Link>

          <Link to="/profile">
            <span>◉</span>
            Attendance
          </Link>

          <Link to="/profile">
            <span>▣</span>
            Leave Management
          </Link>

          <Link to="/profile">
            <span>◈</span>
            Departments
          </Link>

          <Link to="/profile">
            <span>◒</span>
            Performance
          </Link>

        </nav>

        <div className="sidebar-title settings-title">
          SETTINGS
        </div>

        <nav className="sidebar-menu">

          <Link to="/profile">
            <span>⚙</span>
            Settings
          </Link>

          <Link to="/profile">
            <span>?</span>
            Help Center
          </Link>

        </nav>

        {/* USER BOX */}
        <div className="sidebar-user">

          <div className="user-avatar">
            {(user?.name || "N").charAt(0).toUpperCase()}
          </div>

          <div className="user-info">
            <strong>{user?.name || "Naveen"}</strong>
            <small>{user?.email || "admin@company.com"}</small>
          </div>

          <button
            className="logout-small"
            onClick={() => setShowLogoutModal(true)}
          >
            ↪
          </button>

        </div>

      </aside>

      {/* ================= MAIN ================= */}

      <main className="hr-main">

        {/* TOP HEADER */}

        <header className="top-header">

          <div>
            <div className="page-label">
              OVERVIEW
            </div>

            <h1>Dashboard</h1>

            <p>
              Welcome back! Here's what's happening today.
            </p>
          </div>

          <div className="header-actions">

            <button
              className="notification-btn"
              onClick={() => showMessage("No new notifications")}
            >
              ♢
              <span></span>
            </button>

            <div className="header-avatar">
              {(user?.name || "N").charAt(0).toUpperCase()}
            </div>

          </div>

        </header>

        {/* SEARCH */}

        <div className="dashboard-search">

          <span>⌕</span>

          <input
            type="text"
            placeholder="Search employees, departments..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="search-shortcut">
            /
          </div>

        </div>

        {/* ================= STATS ================= */}

        <section className="stats-grid">

          <div className="stat-card">

            <div className="stat-top">
              <div className="stat-icon purple">
                ♙
              </div>

              <span className="growth positive">
                +12.5%
              </span>
            </div>

            <p>Total Employees</p>

            <h2>248</h2>

            <span className="stat-footer">
              Compared to last month
            </span>

          </div>

          <div className="stat-card">

            <div className="stat-top">
              <div className="stat-icon blue">
                ◉
              </div>

              <span className="growth positive">
                +8.2%
              </span>
            </div>

            <p>Present Today</p>

            <h2>216</h2>

            <span className="stat-footer">
              87.1% attendance rate
            </span>

          </div>

          <div className="stat-card">

            <div className="stat-top">
              <div className="stat-icon orange">
                ▣
              </div>

              <span className="growth neutral">
                12 Pending
              </span>
            </div>

            <p>Leave Requests</p>

            <h2>18</h2>

            <span className="stat-footer">
              Requires your attention
            </span>

          </div>

          <div className="stat-card">

            <div className="stat-top">
              <div className="stat-icon green">
                ◒
              </div>

              <span className="growth positive">
                +4.6%
              </span>
            </div>

            <p>Departments</p>

            <h2>12</h2>

            <span className="stat-footer">
              Across the organization
            </span>

          </div>

        </section>

        {/* ================= CONTENT GRID ================= */}

        <section className="content-grid">

          {/* EMPLOYEE TABLE */}

          <div className="panel employee-panel">

            <div className="panel-header">

              <div>
                <h2>Employee Overview</h2>
                <p>Recently added employees</p>
              </div>

              <Link to="/profile" className="view-all">
                View all →
              </Link>

            </div>

            <div className="employee-table">

              <div className="table-head">
                <span>EMPLOYEE</span>
                <span>DEPARTMENT</span>
                <span>STATUS</span>
                <span>ACTION</span>
              </div>

              {filteredEmployees.length > 0 ? (
                filteredEmployees.map((employee) => (

                  <div className="employee-row" key={employee.id}>

                    <div className="employee-name">

                      <div className="employee-avatar">
                        {employee.initials}
                      </div>

                      <div>
                        <strong>{employee.name}</strong>
                        <small>{employee.role}</small>
                      </div>

                    </div>

                    <span className="department">
                      {employee.department}
                    </span>

                    <span
                      className={`status ${
                        employee.status === "Active"
                          ? "status-active"
                          : "status-leave"
                      }`}
                    >
                      <i></i>
                      {employee.status}
                    </span>

                    <Link
                      className="action-link"
                      to="/profile"
                    >
                      View
                    </Link>

                  </div>

                ))
              ) : (

                <div className="table-empty">
                  <div>⌕</div>
                  <h3>No employees found</h3>
                  <p>Try another search keyword.</p>
                </div>

              )}

            </div>

          </div>

          {/* ATTENDANCE */}

          <div className="panel attendance-panel">

            <div className="panel-header">

              <div>
                <h2>Today's Attendance</h2>
                <p>September 25, 2026</p>
              </div>

              <button
                className="more-btn"
                onClick={() => showMessage("Attendance details opened")}
              >
                ⋮
              </button>

            </div>

            <div className="attendance-content">

              <div className="attendance-circle">

                <div>
                  <strong>87%</strong>
                  <span>Present</span>
                </div>

              </div>

              <div className="attendance-details">

                <div>
                  <span>
                    <i className="dot green-dot"></i>
                    Present
                  </span>

                  <strong>216</strong>
                </div>

                <div>
                  <span>
                    <i className="dot orange-dot"></i>
                    On Leave
                  </span>

                  <strong>18</strong>
                </div>

                <div>
                  <span>
                    <i className="dot red-dot"></i>
                    Absent
                  </span>

                  <strong>14</strong>
                </div>

              </div>

            </div>

            <button
              className="full-button"
              onClick={() => showMessage("Attendance page opened")}
            >
              View Attendance
            </button>

          </div>

        </section>

        {/* ================= BOTTOM GRID ================= */}

        <section className="bottom-grid">

          {/* LEAVE REQUESTS */}

          <div className="panel">

            <div className="panel-header">

              <div>
                <h2>Leave Requests</h2>
                <p>Pending approvals</p>
              </div>

              <Link className="view-all" to="/profile">
                View all →
              </Link>

            </div>

            <div className="leave-list">

              <div className="leave-item">

                <div className="mini-avatar purple-avatar">
                  PR
                </div>

                <div className="leave-info">
                  <strong>Priya Reddy</strong>
                  <span>Casual Leave • 2 days</span>
                </div>

                <button
                  onClick={() => showMessage("Leave request approved")}
                  className="approve-btn"
                >
                  Approve
                </button>

              </div>

              <div className="leave-item">

                <div className="mini-avatar blue-avatar">
                  RK
                </div>

                <div className="leave-info">
                  <strong>Rahul Kumar</strong>
                  <span>Sick Leave • 1 day</span>
                </div>

                <button
                  onClick={() => showMessage("Leave request reviewed")}
                  className="review-btn"
                >
                  Review
                </button>

              </div>

              <div className="leave-item">

                <div className="mini-avatar orange-avatar">
                  SP
                </div>

                <div className="leave-info">
                  <strong>Sneha Patel</strong>
                  <span>Annual Leave • 4 days</span>
                </div>

                <button
                  onClick={() => showMessage("Leave request approved")}
                  className="approve-btn"
                >
                  Approve
                </button>

              </div>

            </div>

          </div>

          {/* QUICK ACTIONS */}

          <div className="panel">

            <div className="panel-header">

              <div>
                <h2>Quick Actions</h2>
                <p>Frequently used actions</p>
              </div>

            </div>

            <div className="quick-actions">

              <button
                onClick={() => navigate("/profile")}
              >
                <span className="quick-icon purple">
                  +
                </span>

                <div>
                  <strong>Add Employee</strong>
                  <small>Create a new employee profile</small>
                </div>

                <b>→</b>
              </button>

              <button
                onClick={() => showMessage("Leave application opened")}
              >
                <span className="quick-icon blue">
                  ▣
                </span>

                <div>
                  <strong>Apply Leave</strong>
                  <small>Submit a new leave request</small>
                </div>

                <b>→</b>
              </button>

              <button
                onClick={() => showMessage("Reports opened")}
              >
                <span className="quick-icon green">
                  ◒
                </span>

                <div>
                  <strong>View Reports</strong>
                  <small>Check HR reports and analytics</small>
                </div>

                <b>→</b>
              </button>

            </div>

          </div>

        </section>

        {/* ================= FOOTER ================= */}

        <footer className="dashboard-footer">
          <span>© 2026 Naveen HR Workspace</span>

          <span>
            All systems operational
            <i className="system-dot"></i>
          </span>
        </footer>

      </main>

      {/* ================= LOGOUT MODAL ================= */}

      {showLogoutModal && (

        <div className="modal-overlay">

          <div className="logout-modal">

            <div className="modal-icon">
              ↪
            </div>

            <h2>Sign out?</h2>

            <p>
              Are you sure you want to sign out from
              your HR workspace?
            </p>

            <div className="modal-actions">

              <button
                className="cancel-btn"
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>

              <button
                className="logout-confirm-btn"
                onClick={confirmLogout}
              >
                Sign out
              </button>

            </div>

          </div>

        </div>

      )}

      {/* ================= TOAST ================= */}

      {toast && (
        <div className="toast">
          <span>✓</span>
          {toast}
        </div>
      )}

    </div>
  );
}

export default Dashboard;