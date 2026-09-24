import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "../redux/formSlice";

function UIUXDesign() {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.form);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    role: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setFormData(form));
  };

  return (
    <div className="redux-page">

      {/* HERO SECTION */}

      <div className="hero-section">

        <div className="badge">
          <span>●</span> REDUX TOOLKIT
        </div>

        <h1>
          Global State
          <br />
          <span>Made Simple.</span>
        </h1>

        <p>
          Store form data in Component A and access it instantly
          from Component B using Redux.
        </p>

        {/* FLOW */}

        <div className="flow">

          <div className="flow-card">
            <small>01</small>
            <strong>Component A</strong>
          </div>

          <div className="flow-line"></div>

          <div className="flow-card active">
            <small>02</small>
            <strong>Redux Store</strong>
          </div>

          <div className="flow-line"></div>

          <div className="flow-card">
            <small>03</small>
            <strong>Component B</strong>
          </div>

        </div>

      </div>


      {/* COMPONENT A + REDUX + COMPONENT B */}

      <div className="main-row">


        {/* COMPONENT A */}

        <div className="profile-card component-a">

          <div className="component-label">
            COMPONENT A
          </div>

          <div className="profile-heading">

            <div className="plus-icon">
              +
            </div>

            <div>
              <h2>Create Profile</h2>
              <p>
                Enter your details and save them to Redux.
              </p>
            </div>

          </div>


          <form onSubmit={handleSubmit}>

            <div className="input-grid">

              <div className="input-group">
                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>


              <div className="input-group">
                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>


              <div className="input-group">
                <label>Phone Number</label>

                <input
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>


              <div className="input-group">
                <label>City</label>

                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  value={form.city}
                  onChange={handleChange}
                />
              </div>


              <div className="input-group full-width">
                <label>Role</label>

                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                >
                  <option value="">
                    Select your role
                  </option>

                  <option value="Frontend Developer">
                    Frontend Developer
                  </option>

                  <option value="Backend Developer">
                    Backend Developer
                  </option>

                  <option value="Full Stack Developer">
                    Full Stack Developer
                  </option>

                  <option value="UI/UX Designer">
                    UI/UX Designer
                  </option>

                  <option value="Tester">
                    Tester
                  </option>

                </select>

              </div>

            </div>


            <button
              type="submit"
              className="save-button"
            >
              Save to Redux →
            </button>

          </form>

        </div>


        {/* CENTER REDUX */}

        <div className="redux-middle">

          <div className="redux-line"></div>

          <div className="redux-icon">
            R
          </div>

          <span>Redux</span>

          <div className="redux-line"></div>

        </div>


        {/* COMPONENT B */}

        <div className="profile-card component-b">

          <div className="component-b-header">

            <div>

              <div className="component-label">
                COMPONENT B
              </div>

              <h2>Redux Profile</h2>

              <p>
                Data received from the global Redux Store.
              </p>

            </div>

            <div className="redux-status">
              ● Redux
            </div>

          </div>


          {/* PROFILE */}

          <div className="profile-display">

            <div className="profile-user">

              <div className="avatar">
                {profile.name
                  ? profile.name.charAt(0).toUpperCase()
                  : "T"}
              </div>

              <div>
                <h3>
                  {profile.name || "tarak"}
                </h3>

                <span>
                  {profile.role || "Full Stack Developer"}
                </span>
              </div>

            </div>


            {/* DETAILS */}

            <div className="details-grid">

              <div className="detail-box">
                <small>NAME</small>

                <strong>
                  {profile.name || "tarak"}
                </strong>
              </div>


              <div className="detail-box">
                <small>EMAIL</small>

                <strong>
                  {profile.email || "tarak@gmail.com"}
                </strong>
              </div>


              <div className="detail-box">
                <small>PHONE</small>

                <strong>
                  {profile.phone || "9988776655"}
                </strong>
              </div>


              <div className="detail-box">
                <small>CITY</small>

                <strong>
                  {profile.city || "Hyderabad"}
                </strong>
              </div>


              <div className="detail-box full-width">
                <small>ROLE</small>

                <strong>
                  {profile.role || "Full Stack Developer"}
                </strong>
              </div>

            </div>

          </div>

        </div>

      </div>


      <footer>
        Redux Toolkit &nbsp; • &nbsp; Global State Management
      </footer>

    </div>
  );
}

export default UIUXDesign;