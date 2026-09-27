import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const initialEmployees = [
  {
    id: 1,
    name: "Rahul Kumar",
    email: "rahul@company.com",
    phone: "9876543210",
    department: "IT",
    role: "Software Engineer",
    status: "Active",
    joining: "12 Jan 2024",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@company.com",
    phone: "9876543211",
    department: "HR",
    role: "HR Executive",
    status: "Active",
    joining: "18 Mar 2024",
  },
  {
    id: 3,
    name: "Arjun Reddy",
    email: "arjun@company.com",
    phone: "9876543212",
    department: "Finance",
    role: "Accountant",
    status: "On Leave",
    joining: "25 Jun 2023",
  },
  {
    id: 4,
    name: "Sneha Patel",
    email: "sneha@company.com",
    phone: "9876543213",
    department: "Design",
    role: "UI Designer",
    status: "Active",
    joining: "02 Feb 2025",
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "vikram@company.com",
    phone: "9876543214",
    department: "Sales",
    role: "Sales Executive",
    status: "Active",
    joining: "15 Apr 2025",
  },
  {
    id: 6,
    name: "Anjali Rao",
    email: "anjali@company.com",
    phone: "9876543215",
    department: "Marketing",
    role: "Marketing Executive",
    status: "Inactive",
    joining: "20 Aug 2023",
  },
];

function Employees() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const [toast, setToast] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "IT",
    role: "",
    phone: "",
  });

  const departments = [
    "All",
    "IT",
    "HR",
    "Finance",
    "Design",
    "Sales",
    "Marketing",
  ];

  const filtered = useMemo(() => {
    return employees.filter((employee) => {

      const matchesSearch =
        employee.name.toLowerCase().includes(search.toLowerCase()) ||
        employee.email.toLowerCase().includes(search.toLowerCase()) ||
        employee.role.toLowerCase().includes(search.toLowerCase());

      const matchesDepartment =
        department === "All" ||
        employee.department === department;

      return matchesSearch && matchesDepartment;
    });
  }, [employees, search, department]);

  const addEmployee = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.role) {
      setToast("Please fill all required fields");
      return;
    }

    const newEmployee = {
      id: Date.now(),
      ...form,
      status: "Active",
      joining: new Date().toLocaleDateString("en-GB"),
    };

    setEmployees([newEmployee, ...employees]);

    setForm({
      name: "",
      email: "",
      department: "IT",
      role: "",
      phone: "",
    });

    setShowModal(false);
    setToast("Employee added successfully");

    setTimeout(() => setToast(""), 2000);
  };

  const deleteEmployee = (id) => {
    setEmployees(
      employees.filter((employee) => employee.id !== id)
    );

    setToast("Employee deleted successfully");

    setTimeout(() => setToast(""), 2000);
  };

  return (
    <div className="page-layout">

      <header className="simple-header">

        <div>
          <span className="eyebrow">
            HR MANAGEMENT
          </span>

          <h1>Employees</h1>

          <p>
            Manage your organization's employees.
          </p>
        </div>

        <Link to="/dashboard" className="back-button">
          ← Dashboard
        </Link>

      </header>


      <div className="toolbar">

        <div className="search-box">

          <span>⌕</span>

          <input
            placeholder="Search employees..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          {departments.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <button
          className="primary-button"
          onClick={() => setShowModal(true)}
        >
          + Add Employee
        </button>

      </div>


      <div className="table-card">

        <div className="table-card-header">

          <div>
            <h2>All Employees</h2>
            <span>
              {filtered.length} employees found
            </span>
          </div>

        </div>

        <div className="responsive-table">

          <table>

            <thead>
              <tr>
                <th>EMPLOYEE</th>
                <th>ROLE</th>
                <th>DEPARTMENT</th>
                <th>JOINING DATE</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>

              {filtered.map((employee) => (

                <tr key={employee.id}>

                  <td>

                    <div className="table-user">

                      <div className="employee-avatar">
                        {employee.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>

                      <div>
                        <strong>{employee.name}</strong>
                        <span>{employee.email}</span>
                      </div>

                    </div>

                  </td>

                  <td>{employee.role}</td>

                  <td>{employee.department}</td>

                  <td>{employee.joining}</td>

                  <td>

                    <span
                      className={
                        employee.status === "Active"
                          ? "badge active-badge"
                          : employee.status === "On Leave"
                          ? "badge leave-badge"
                          : "badge inactive-badge"
                      }
                    >
                      {employee.status}
                    </span>

                  </td>

                  <td>

                    <div className="action-buttons">

                      <button
                        onClick={() =>
                          setSelected(employee)
                        }
                      >
                        View
                      </button>

                      <button
                        onClick={() =>
                          deleteEmployee(employee.id)
                        }
                        className="delete-action"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          {filtered.length === 0 && (
            <div className="empty-state">
              <div>🔍</div>
              <h3>No employees found</h3>
              <p>Try another search or filter.</p>
            </div>
          )}

        </div>

      </div>


      {/* ADD EMPLOYEE MODAL */}
      {showModal && (

        <div className="modal-overlay">

          <div className="modal large-modal">

            <button
              className="close-modal"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>

            <h2>Add Employee</h2>

            <p>
              Enter the employee information below.
            </p>

            <form
              className="employee-form"
              onSubmit={addEmployee}
            >

              <label>
                Full Name *
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  placeholder="Enter full name"
                />
              </label>

              <label>
                Email *
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  placeholder="employee@company.com"
                />
              </label>

              <label>
                Phone
                <input
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value,
                    })
                  }
                  placeholder="Phone number"
                />
              </label>

              <label>
                Department
                <select
                  value={form.department}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      department: e.target.value,
                    })
                  }
                >
                  {departments
                    .filter((d) => d !== "All")
                    .map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                </select>
              </label>

              <label>
                Role *
                <input
                  value={form.role}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      role: e.target.value,
                    })
                  }
                  placeholder="Job title"
                />
              </label>

              <div className="modal-buttons">

                <button
                  type="button"
                  className="cancel"
                  onClick={() =>
                    setShowModal(false)
                  }
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="primary-button"
                >
                  Add Employee
                </button>

              </div>

            </form>

          </div>

        </div>

      )}


      {/* VIEW MODAL */}
      {selected && (

        <div className="modal-overlay">

          <div className="modal">

            <button
              className="close-modal"
              onClick={() => setSelected(null)}
            >
              ×
            </button>

            <div className="profile-big-avatar">
              {selected.name.charAt(0)}
            </div>

            <h2>{selected.name}</h2>

            <p>{selected.role}</p>

            <div className="details-list">

              <div>
                <span>Email</span>
                <strong>{selected.email}</strong>
              </div>

              <div>
                <span>Phone</span>
                <strong>{selected.phone}</strong>
              </div>

              <div>
                <span>Department</span>
                <strong>{selected.department}</strong>
              </div>

              <div>
                <span>Status</span>
                <strong>{selected.status}</strong>
              </div>

            </div>

          </div>

        </div>

      )}

      {toast && (
        <div className="toast">
          ✓ {toast}
        </div>
      )}

    </div>
  );
}

export default Employees;