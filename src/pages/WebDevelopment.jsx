import React from "react";
import { useSearchParams } from "react-router-dom";
import "./WebDevelopment.css";

const users = [
  { id: 1, name: "Ravi Kumar", email: "ravi@gmail.com", city: "Hyderabad", role: "Developer" },
  { id: 2, name: "Priya Sharma", email: "priya@gmail.com", city: "Bangalore", role: "Designer" },
  { id: 3, name: "Arjun Reddy", email: "arjun@gmail.com", city: "Chennai", role: "Tester" },
  { id: 4, name: "Sneha Patel", email: "sneha@gmail.com", city: "Mumbai", role: "Manager" },
  { id: 5, name: "Kiran Rao", email: "kiran@gmail.com", city: "Pune", role: "Developer" },
  { id: 6, name: "Neha Gupta", email: "neha@gmail.com", city: "Mumbai", role: "HR" },
  { id: 7, name: "Rohit Sharma", email: "rohit@gmail.com", city: "Jaipur", role: "Manager" },
  { id: 8, name: "Swathi Reddy", email: "swathi@gmail.com", city: "Warangal", role: "Tester" },
  { id: 9, name: "Vamsi Krishna", email: "vamsi@gmail.com", city: "Vizag", role: "Developer" },
  { id: 10, name: "Harika Rao", email: "harika@gmail.com", city: "Bangalore", role: "Designer" },
  { id: 11, name: "Rahul Verma", email: "rahul@gmail.com", city: "Delhi", role: "Developer" },
  { id: 12, name: "Ananya Singh", email: "ananya@gmail.com", city: "Kolkata", role: "HR" },
  { id: 13, name: "Vivek Kumar", email: "vivek@gmail.com", city: "Hyderabad", role: "Tester" },
  { id: 14, name: "Pooja Mehta", email: "pooja@gmail.com", city: "Ahmedabad", role: "Designer" },
  { id: 15, name: "Sanjay Rao", email: "sanjay@gmail.com", city: "Pune", role: "Manager" },
  { id: 16, name: "Neha Gupta", email: "neha2@gmail.com", city: "Mumbai", role: "HR" },
  { id: 17, name: "Rohit Kumar", email: "rohit2@gmail.com", city: "Jaipur", role: "Manager" },
  { id: 18, name: "Swathi Reddy", email: "swathi2@gmail.com", city: "Warangal", role: "Tester" },
  { id: 19, name: "Naveen Krishna", email: "vamsi2@gmail.com", city: "Vizag", role: "Developer" },
  { id: 20, name: "Harika Rao", email: "harika2@gmail.com", city: "Bangalore", role: "Designer" }
];

function WebDevelopment() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const recordsPerPage = 5;

  const totalPages = Math.ceil(users.length / recordsPerPage);

  const startIndex = (currentPage - 1) * recordsPerPage;
  const currentUsers = users.slice(
    startIndex,
    startIndex + recordsPerPage
  );

  const changePage = (page) => {
    setSearchParams({ page: page.toString() });
  };

  return (
    <div className="pagination-container">

      <div className="hero-section">
        <div>
          <p className="small-title">USER DIRECTORY</p>
          <h1>Everyone in one view.</h1>
          <p className="subtitle">
            A simple pagination system powered by React Router
          </p>
        </div>

        <div className="total-box">
          <strong>{users.length}</strong>
          <span>Total Users</span>
        </div>
      </div>

      <div className="content-card">

        <div className="section-header">
          <div>
            <h2>User Management</h2>
            <p>Pagination using useSearchParams</p>
          </div>

          <div className="page-badge">
            Page {currentPage} of {totalPages}
          </div>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Role</th>
              </tr>
            </thead>

            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td className="user-name">{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.city}</td>
                  <td>
                    <span className="role">{user.role}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination-controls">

          <button
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ← Previous
          </button>

          <div className="page-number">
            Page <strong>{currentPage}</strong> of {totalPages}
          </div>

          <button
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next →
          </button>

        </div>

      </div>

      <p className="footer-text">
        Built with React • useSearchParams • Pagination
      </p>

    </div>
  );
}

export default WebDevelopment;