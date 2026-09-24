import useFetch from "../hooks/useFetch";

function Users() {
  const {
    data: users,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) {
    return <div className="loading">Loading users...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <section className="page-section">
      <div className="page-header">
        <p className="eyebrow">API INTEGRATION</p>
        <h1>Our Users</h1>
        <p>Users loaded from an external API.</p>
      </div>

      <div className="users-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <div className="user-icon">
              {user.name.charAt(0)}
            </div>

            <h3>{user.name}</h3>

            <p>📧 {user.email}</p>
            <p>📞 {user.phone}</p>
            <p>🏙️ {user.address.city}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Users;