import { useState } from "react";
import { Link } from "react-router-dom";

function LeaveManagement() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Rahul Kumar",
      type: "Casual Leave",
      days: 2,
      from: "26 Sep",
      to: "27 Sep",
      status: "Pending",
    },
    {
      id: 2,
      name: "Priya Sharma",
      type: "Sick Leave",
      days: 1,
      from: "26 Sep",
      to: "26 Sep",
      status: "Pending",
    },
    {
      id: 3,
      name: "Arjun Reddy",
      type: "Annual Leave",
      days: 3,
      from: "29 Sep",
      to: "01 Oct",
      status: "Pending",
    },
    {
      id: 4,
      name: "Sneha Patel",
      type: "Personal Leave",
      days: 1,
      from: "30 Sep",
      to: "30 Sep",
      status: "Approved",
    },
  ]);

  const [toast, setToast] = useState("");

  const updateStatus = (id, status) => {

    setRequests(
      requests.map((request) =>
        request.id === id
          ? { ...request, status }
          : request
      )
    );

    setToast(`Leave request ${status.toLowerCase()}`);

    setTimeout(() => setToast(""), 2000);
  };

  return (
    <div className="page-layout">

      <header className="simple-header">

        <div>
          <span className="eyebrow">
            HR MANAGEMENT
          </span>

          <h1>Leave Management</h1>

          <p>
            Review, approve and manage employee leave.
          </p>
        </div>

        <Link to="/dashboard" className="back-button">
          ← Dashboard
        </Link>

      </header>


      <div className="leave-stats">

        <div>
          <span>Total Requests</span>
          <strong>{requests.length}</strong>
        </div>

        <div>
          <span>Pending</span>
          <strong>
            {requests.filter(
              (r) => r.status === "Pending"
            ).length}
          </strong>
        </div>

        <div>
          <span>Approved</span>
          <strong>
            {requests.filter(
              (r) => r.status === "Approved"
            ).length}
          </strong>
        </div>

        <div>
          <span>Rejected</span>
          <strong>
            {requests.filter(
              (r) => r.status === "Rejected"
            ).length}
          </strong>
        </div>

      </div>


      <div className="table-card">

        <div className="table-card-header">

          <div>
            <h2>Leave Requests</h2>
            <span>Manage employee leave requests</span>
          </div>

          <button className="primary-button">
            + Apply Leave
          </button>

        </div>


        <div className="responsive-table">

          <table>

            <thead>
              <tr>
                <th>EMPLOYEE</th>
                <th>LEAVE TYPE</th>
                <th>DURATION</th>
                <th>DATES</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>

              {requests.map((request) => (

                <tr key={request.id}>

                  <td>
                    <strong>{request.name}</strong>
                  </td>

                  <td>{request.type}</td>

                  <td>{request.days} day(s)</td>

                  <td>
                    {request.from} - {request.to}
                  </td>

                  <td>

                    <span
                      className={
                        request.status === "Approved"
                          ? "badge active-badge"
                          : request.status === "Rejected"
                          ? "badge inactive-badge"
                          : "badge warning-badge"
                      }
                    >
                      {request.status}
                    </span>

                  </td>

                  <td>

                    {request.status === "Pending" ? (

                      <div className="action-buttons">

                        <button
                          onClick={() =>
                            updateStatus(
                              request.id,
                              "Approved"
                            )
                          }
                        >
                          Approve
                        </button>

                        <button
                          className="delete-action"
                          onClick={() =>
                            updateStatus(
                              request.id,
                              "Rejected"
                            )
                          }
                        >
                          Reject
                        </button>

                      </div>

                    ) : (
                      "—"
                    )}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {toast && (
        <div className="toast">
          ✓ {toast}
        </div>
      )}

    </div>
  );
}

export default LeaveManagement;