import { useReducer } from "react";

const initialState = {
  selected: "Interior Design",
};

function reducer(state, action) {
  if (action.type === "SELECT_SERVICE") {
    return {
      ...state,
      selected: action.payload,
    };
  }

  return state;
}

function Services() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const services = [
    "Interior Design",
    "Custom Furniture",
    "Home Delivery",
    "Furniture Installation",
  ];

  return (
    <section className="page-section">
      <div className="page-header">
        <p className="eyebrow">WHAT WE OFFER</p>
        <h1>Our Services</h1>
        <p>Complete furniture solutions for your home.</p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <button
            key={service}
            className={
              state.selected === service
                ? "service-card active"
                : "service-card"
            }
            onClick={() =>
              dispatch({
                type: "SELECT_SERVICE",
                payload: service,
              })
            }
          >
            <h3>{service}</h3>
            <p>Learn more about our {service.toLowerCase()} service.</p>
          </button>
        ))}
      </div>

      <div className="selected-service">
        Selected Service: <strong>{state.selected}</strong>
      </div>
    </section>
  );
}

export default Services;