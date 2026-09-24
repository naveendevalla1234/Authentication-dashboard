import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="avatar">
        {user.name.charAt(0)}
      </div>

      <div className="card-content">
        <p className="user-id">USER #{user.id}</p>

        <h2>{user.name}</h2>

        <p className="username">@{user.username}</p>

        <div className="info">
          <span>✉</span>
          <span>{user.email}</span>
        </div>

        <div className="info">
          <span>⌖</span>
          <span>{user.city}</span>
        </div>

        <Link to={`/users/${user.id}`} className="details-btn">
          View Details →
        </Link>
      </div>
    </div>
  );
}

export default UserCard;