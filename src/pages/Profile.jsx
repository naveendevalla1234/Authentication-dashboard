import { Link } from "react-router-dom";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="dashboard-content">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>

          <div>
            <h1>My Profile</h1>
            <p>Manage your personal information</p>
          </div>
        </div>

        <div className="profile-details">
          <div className="profile-item">
            <span>Full Name</span>
            <strong>{user?.name || "Not available"}</strong>
          </div>

          <div className="profile-item">
            <span>Email Address</span>
            <strong>{user?.email || "Not available"}</strong>
          </div>

          <div className="profile-item">
            <span>Account Status</span>
            <strong className="status-active">Active</strong>
          </div>
        </div>

        <div className="profile-actions">
          <Link className="primary-btn link-btn" to="/edit-profile">
            Edit Profile
          </Link>

          <Link className="secondary-btn link-btn" to="/dashboard">
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;