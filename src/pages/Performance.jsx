import { Link } from "react-router-dom";

function Performance() {
  const employees = [
    ["Rahul Kumar", "Software Engineer", 92],
    ["Priya Sharma", "HR Executive", 88],
    ["Sneha Patel", "UI Designer", 95],
    ["Vikram Singh", "Sales Executive", 81],
    ["Anjali Rao", "Marketing Executive", 86],
  ];

  return (
    <div className="page-layout">

      <header className="simple-header">

        <div>
          <span className="eyebrow">
            HR MANAGEMENT
          </span>

          <h1>Performance</h1>

          <p>
            Track employee performance and reviews.
          </p>
        </div>

        <Link to="/dashboard" className="back-button">
          ← Dashboard
        </Link>

      </header>


      <div className="performance-summary">

        <div>
          <span>Average Score</span>
          <strong>88.4%</strong>
        </div>

        <div>
          <span>Top Performers</span>
          <strong>18</strong>
        </div>

        <div>
          <span>Reviews Completed</span>
          <strong>82%</strong>
        </div>

        <div>
          <span>Pending Reviews</span>
          <strong>32</strong>
        </div>

      </div>


      <div className="table-card">

        <div className="table-card-header">

          <div>
            <h2>Employee Performance</h2>
            <span>Current performance cycle</span>
          </div>

          <button className="primary-button">
            + New Review
          </button>

        </div>


        <div className="performance-list">

          {employees.map((employee) => (

            <div
              className="performance-row"
              key={employee[0]}
            >

              <div className="table-user">

                <div className="employee-avatar">
                  {employee[0]
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <div>
                  <strong>{employee[0]}</strong>
                  <span>{employee[1]}</span>
                </div>

              </div>


              <div className="progress-container">

                <div className="progress-label">
                  <span>Performance</span>
                  <strong>{employee[2]}%</strong>
                </div>

                <div className="progress-bar">
                  <span
                    style={{
                      width: `${employee[2]}%`,
                    }}
                  ></span>
                </div>

              </div>

              <span className="badge active-badge">
                {employee[2] >= 90
                  ? "Excellent"
                  : "Good"}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Performance;