import { Link } from "react-router-dom";

function Departments() {
  const departments = [
    ["IT", "Technology", "62", "12.5 LPA"],
    ["Human Resources", "People", "24", "8.4 LPA"],
    ["Finance", "Accounts", "31", "9.2 LPA"],
    ["Design", "Creative", "18", "8.8 LPA"],
    ["Sales", "Business", "54", "10.1 LPA"],
    ["Marketing", "Growth", "29", "9.6 LPA"],
  ];

  return (
    <div className="page-layout">

      <header className="simple-header">

        <div>
          <span className="eyebrow">
            HR MANAGEMENT
          </span>

          <h1>Departments</h1>

          <p>
            Manage organizational departments.
          </p>
        </div>

        <Link to="/dashboard" className="back-button">
          ← Dashboard
        </Link>

      </header>


      <div className="department-grid">

        {departments.map((department) => (

          <div
            className="department-card"
            key={department[0]}
          >

            <div className="department-icon">
              ▦
            </div>

            <div className="department-top">

              <div>
                <h2>{department[0]}</h2>
                <span>{department[1]}</span>
              </div>

              <button>
                ⋮
              </button>

            </div>

            <div className="department-info">

              <div>
                <span>Employees</span>
                <strong>{department[2]}</strong>
              </div>

              <div>
                <span>Avg. Salary</span>
                <strong>{department[3]}</strong>
              </div>

            </div>

          </div>

        ))}

      </div>


      <button className="primary-button">
        + Add Department
      </button>

    </div>
  );
}

export default Departments;