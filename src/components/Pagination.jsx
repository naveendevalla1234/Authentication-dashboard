import { useSearchParams } from "react-router-dom";
import "../WebDevelopment.css";

const users = [
  {
    id: 1,
    name: "Ravi Kumar",
    email: "ravi@gmail.com",
    city: "Hyderabad",
    role: "Developer",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@gmail.com",
    city: "Bangalore",
    role: "Designer",
  },
  {
    id: 3,
    name: "Arjun Reddy",
    email: "arjun@gmail.com",
    city: "Chennai",
    role: "Tester",
  },
  {
    id: 4,
    name: "Sneha Patel",
    email: "sneha@gmail.com",
    city: "Mumbai",
    role: "Manager",
  },
  {
    id: 5,
    name: "Kiran Rao",
    email: "kiran@gmail.com",
    city: "Pune",
    role: "Developer",
  },
  {
    id: 6,
    name: "Anjali Singh",
    email: "anjali@gmail.com",
    city: "Delhi",
    role: "HR",
  },
  {
    id: 7,
    name: "Vikram Das",
    email: "vikram@gmail.com",
    city: "Kolkata",
    role: "Developer",
  },
  {
    id: 8,
    name: "Meena Reddy",
    email: "meena@gmail.com",
    city: "Hyderabad",
    role: "Tester",
  },
  {
    id: 9,
    name: "Rahul Verma",
    email: "rahul@gmail.com",
    city: "Bangalore",
    role: "Designer",
  },
  {
    id: 10,
    name: "Pooja Nair",
    email: "pooja@gmail.com",
    city: "Kochi",
    role: "Manager",
  },
  {
    id: 11,
    name: "Suresh Babu",
    email: "suresh@gmail.com",
    city: "Vijayawada",
    role: "Developer",
  },
  {
    id: 12,
    name: "Divya Rao",
    email: "divya@gmail.com",
    city: "Chennai",
    role: "HR",
  },
  {
    id: 13,
    name: "Manoj Kumar",
    email: "manoj@gmail.com",
    city: "Pune",
    role: "Tester",
  },
  {
    id: 14,
    name: "Lakshmi Devi",
    email: "lakshmi@gmail.com",
    city: "Hyderabad",
    role: "Designer",
  },
  {
    id: 15,
    name: "Ajay Singh",
    email: "ajay@gmail.com",
    city: "Delhi",
    role: "Developer",
  },
  {
    id: 16,
    name: "Neha Gupta",
    email: "neha@gmail.com",
    city: "Mumbai",
    role: "HR",
  },
  {
    id: 17,
    name: "Rohit Sharma",
    email: "rohit@gmail.com",
    city: "Jaipur",
    role: "Manager",
  },
  {
    id: 18,
    name: "Swathi Reddy",
    email: "swathi@gmail.com",
    city: "Warangal",
    role: "Tester",
  },
  {
    id: 19,
    name: "Vamsi Krishna",
    email: "vamsi@gmail.com",
    city: "Vizag",
    role: "Developer",
  },
  {
    id: 20,
    name: "Harika Rao",
    email: "harika@gmail.com",
    city: "Bangalore",
    role: "Designer",
  },
];

function Pagination() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const recordsPerPage = 5;

  const totalPages = Math.ceil(
    users.length / recordsPerPage
  );

  const startIndex =
    (currentPage - 1) * recordsPerPage;

  const currentUsers = users.slice(
    startIndex,
    startIndex + recordsPerPage
  );

  const changePage = (page) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setSearchParams({
      page: page.toString(),
    });
  };

  return (
    <div className="pagination-container">
      <div className="content-card">

        {/* HEADER */}
        <div className="section-header">

          <div>
            <h1>User Management</h1>

            <p>
              Users are displayed 5 records per page
            </p>
          </div>

          <div className="page-badge">

            <small>CURRENT PAGE</small>

            <strong>
              ?page={currentPage}
            </strong>

          </div>

        </div>

        {/* TABLE */}
        <div className="table-wrapper">

          <table>

            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>CITY</th>
                <th>ROLE</th>
              </tr>
            </thead>

            <tbody>

              {currentUsers.map((user) => (
                <tr key={user.id}>

                  <td>{user.id}</td>

                  <td>
                    <div className="user-info">

                      <span className="avatar">
                        {user.name.charAt(0)}
                      </span>

                      <span className="user-name">
                        {user.name}
                      </span>

                    </div>
                  </td>

                  <td>{user.email}</td>

                  <td>{user.city}</td>

                  <td>
                    <span className="role">
                      {user.role}
                    </span>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* PAGINATION BUTTONS */}
        <div className="pagination-controls">

          <button
            onClick={() =>
              changePage(currentPage - 1)
            }
            disabled={currentPage === 1}
          >
            ← Previous
          </button>

          <div className="page-buttons">

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (
              <button
                key={page}
                className={
                  currentPage === page
                    ? "active-page"
                    : ""
                }
                onClick={() => changePage(page)}
              >
                {page}
              </button>
            ))}

          </div>

          <button
            onClick={() =>
              changePage(currentPage + 1)
            }
            disabled={
              currentPage === totalPages
            }
          >
            Next →
          </button>

        </div>

        {/* FOOTER */}
        <p className="footer-text">

          Showing {startIndex + 1}–
          {Math.min(
            startIndex + recordsPerPage,
            users.length
          )}{" "}
          of {users.length} users

        </p>

      </div>
    </div>
  );
}

export default Pagination;