import { Link } from "react-router-dom";

function Attendance() {
  const records = [
    ["Rahul Kumar", "IT", "09:02 AM", "Present"],
    ["Priya Sharma", "HR", "08:54 AM", "Present"],
    ["Arjun Reddy", "Finance", "—", "Absent"],
    ["Sneha Patel", "Design", "09:18 AM", "Late"],
    ["Vikram Singh", "Sales", "08:48 AM", "Present"],
    ["Anjali Rao", "Marketing", "—", "On Leave"],
  ];

  return (
    <div className="page-layout">

      <header className="simple-header">

        <div>
          <span className="eyebrow">
            HR MANAGEMENT
          </span>

          <h1>Attendance</h1>

          <p>
            Track employee attendance and working hours.
          </p>
        </div>

        <Link to="/dashboard" className="back-button">
          ← Dashboard
        </Link>

      </header>


      <div className="attendance-cards">

        <div className="attendance-stat">
          <span>Present</span>
          <strong>214</strong>
          <small>86.3%</small>
        </div>

        <div className="attendance-stat">
          <span>Late</span>
          <strong>16</strong>
          <small>6.4%</small>
        </div>

        <div className="attendance-stat">
          <span>Absent</span>
          <strong>18</strong>
          <small>7.2%</small>
        </div>

        <div className="attendance-stat">
          <span>On Leave</span>
          <strong>12</strong>
          <small>4.8%</small>
        </div>

      </div>


      <div className="table-card">

        <div className="table-card-header">

          <div>
            <h2>Today's Attendance</h2>
            <span>25 September 2026</span>
          </div>

          <input
            type="date"
            className="date-input"
          />

        </div>

        <div className="responsive-table">

          <table>

            <thead>
              <tr>
                <th>EMPLOYEE</th>
                <th>DEPARTMENT</th>
                <th>CHECK IN</th>
                <th>STATUS</th>
              </tr>
            </thead>

            <tbody>

              {records.map((record) => (

                <tr key={record[0]}>

                  <td>
                    <strong>{record[0]}</strong>
                  </td>

                  <td>{record[1]}</td>

                  <td>{record[2]}</td>

                  <td>

                    <span
                      className={
                        record[3] === "Present"
                          ? "badge active-badge"
                          : record[3] === "Late"
                          ? "badge warning-badge"
                          : "badge leave-badge"
                      }
                    >
                      {record[3]}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Attendance;