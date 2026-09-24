function About() {
  return (
    <section className="page-section">
      <div className="page-header">
        <p className="eyebrow">ABOUT US</p>
        <h1>About Elite Furniture</h1>
        <p>
          We create beautiful furniture that combines comfort,
          quality and modern design.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-box">
          <span>01</span>
          <h2>Premium Quality</h2>
          <p>
            We focus on strong materials and excellent finishing
            for long-lasting furniture.
          </p>
        </div>

        <div className="about-box">
          <span>02</span>
          <h2>Modern Design</h2>
          <p>
            Our furniture collection is designed for modern homes
            and stylish interiors.
          </p>
        </div>

        <div className="about-box">
          <span>03</span>
          <h2>Customer Service</h2>
          <p>
            We provide friendly service and help customers select
            the right furniture.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;