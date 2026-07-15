import React, { useState } from "react";

function About() {
  const [mystyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (mystyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });

      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });

      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <div className="container my-3" style={mystyle}>
      <h1>About Us</h1>

      <div className="accordion" id="accordionExample">

        {/* Item 1 */}
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>

          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>This is the first item's accordion body.</strong>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>

          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>This is the second item's accordion body.</strong>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>

          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>This is the third item's accordion body.</strong>
            </div>
          </div>
        </div>

      </div>

      <div className="container my-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={toggleStyle}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default About;