function About() {
  return (
    <section className="section">
      <div className="container">

        <h2 className="title">
          About ALEX PURE WATER TECHNOLOGY
        </h2>

        <p className="subtitle">
          We provide premium water purifier sales, installation,
          repair, AMC services and commercial water solutions.
          Our mission is to deliver clean, safe and healthy drinking
          water to every home and business.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
            marginTop: "50px",
          }}
        >
          <div className="glass" style={{ padding: "30px", borderRadius: "20px" }}>
            <h3>💧 Pure Water</h3>
            <p>
              Advanced RO, UV and UF water purification systems for homes
              and businesses.
            </p>
          </div>

          <div className="glass" style={{ padding: "30px", borderRadius: "20px" }}>
            <h3>🛠 Installation & Service</h3>
            <p>
              Professional installation, repair and annual maintenance
              by experienced technicians.
            </p>
          </div>

          <div className="glass" style={{ padding: "30px", borderRadius: "20px" }}>
            <h3>📍 Service Area</h3>
            <p>
              Maharashtra Chowk,
              Wanadongri,
              Hingna,
              Nagpur - 441110
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
