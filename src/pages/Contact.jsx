import { useRef, useState } from "react";

function Contact() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill all fields.");
      return;
    }

    setSuccess("Your message has been submitted successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    formRef.current?.reset();
  };

  return (
    <section className="contact-page">
      <div className="page-header">
        <p className="eyebrow">GET IN TOUCH</p>

        <h1>Contact Us</h1>

        <p>Have a question? We would love to hear from you.</p>
      </div>

      <form
        ref={formRef}
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
        />

        {error && <p className="form-error">{error}</p>}

        {success && <p className="form-success">{success}</p>}

        <button type="submit" className="primary-btn">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;