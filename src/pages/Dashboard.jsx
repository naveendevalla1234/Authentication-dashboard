import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const [search, setSearch] = useState("");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [toast, setToast] = useState("");

  const confirmLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("rememberMe");

    setShowLogoutModal(false);
    setToast("Logged out successfully!");

    setTimeout(() => {
      navigate("/login");
    }, 800);
  };

  const searchText = search.toLowerCase();

  const cards = [
    {
      title: "Profile",
      description: "Manage your personal information.",
      link: "/profile",
      button: "View Profile",
    },
    {
      title: "Edit Profile",
      description: "Update your account details.",
      link: "/edit-profile",
      button: "Edit Profile",
    },
    {
      title: "Security",
      description: "Change your account password.",
      link: "/change-password",
      button: "Change Password",
    },
  ];

  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchText) ||
      card.description.toLowerCase().includes(searchText)
  );

  return (
    <div className="dashboard">

      {/* Navbar */}
      <nav className="navbar">
        <h2>My Dashboard</h2>

        <div className="nav-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>

          <button onClick={() => setShowLogoutModal(true)}>
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="dashboard-content">

        <div className="welcome-section">
          <div>
            <h1>Hello, {user?.name || "User"} 👋</h1>
            <p>Welcome to your authentication dashboard.</p>
          </div>
        </div>

        {/* Search */}
        <div className="search-wrapper">
          <input
            className="search"
            placeholder="Search dashboard..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Cards */}
        {filteredCards.length > 0 ? (
          <div className="cards">
            {filteredCards.map((card) => (
              <div className="card" key={card.title}>
                <div className="card-icon">
                  {card.title === "Profile" && "👤"}
                  {card.title === "Edit Profile" && "✏️"}
                  {card.title === "Security" && "🔐"}
                </div>

                <h3>{card.title}</h3>

                <p>{card.description}</p>

                <Link to={card.link}>
                  {card.button}
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>
            <h3>No results found</h3>
            <p>Try searching with a different keyword.</p>
          </div>
        )}
      </main>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="modal-overlay">
          <div className="logout-modal">
            <h2>Logout?</h2>

            <p>
              Are you sure you want to logout from your account?
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
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default Dashboard;