import React from "react";

const Hero = () => {
  return (
    <div className="container-fluid mb-5" style={{ backgroundColor: "#387ed1", color: "#fff", padding: "2rem 1rem" }}>
      {/* Header Links */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center px-md-5 pb-4">
        <a href="#" style={{ textDecoration: "none", color: "#fff", fontSize: "1.5rem" }}>
          Support Portal
        </a>
        <a href="#" style={{ color: "#fff", fontSize: "1.2rem", marginTop: "0.5rem" }}>
          Track tickets
        </a>
      </div>

      {/* Main Content */}
      <div className="row px-md-5 py-3 flex-column-reverse flex-md-row">
        {/* Left Column */}
        <div className="col-md-8 mb-4">
          <h3>Search for an answer or browse help topics to create a ticket</h3>

          <div className="input-group mt-3">
            <input
              type="search"
              className="form-control"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
              style={{ color: "#000" }}
            />
            <button className="btn btn-light">🔍</button>
          </div>

          <div className="d-flex flex-wrap gap-3 mt-4" style={{ fontSize: "1.1rem", textDecoration: "underline" }}>
            <a href="#" className="text-white">Track account opening</a>
            <a href="#" className="text-white">Track segment activation</a>
            <a href="#" className="text-white">Intraday margins</a>
            <a href="#" className="text-white">Kite user manual</a>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-4 mb-4 mb-md-0">
          <h4>Featured</h4>
          <ul className="mt-3 ps-3" style={{ fontSize: "1.1rem", lineHeight: "2rem" }}>
            <li>
              <a href="#" className="text-white text-decoration-underline">
                Introduction of new F&O contracts on 9 individual securities
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-decoration-underline">
                Rights Entitlements listing in May 2025
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
