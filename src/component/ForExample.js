import React, { useState } from "react";

function FormExample() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    if (user.name === "") {
      alert("Name is required");
      return;
    }

    if (user.email === "") {
      alert("Email is required");
      return;
    }

    if (user.mobile.length !== 10) {
      alert("Mobile number must be exactly 10 digits");
      return;
    }

    if (user.password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    alert("Form Submitted Successfully!");

    console.log(user);
  };

  return (
    <div className="container mt-4">
      <h2 align="center">Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <table
          border="1"
          cellPadding="10"
          cellSpacing="0"
          align="center"
        >
          <tbody>
            <tr>
              <td>
                <label>Name</label>
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>Email</label>
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>Mobile Number</label>
              </td>
              <td>
                <input
                  type="tel"
                  name="mobile"
                  value={user.mobile}
                  onChange={handleChange}
                  placeholder="Enter 10-digit mobile number"
                  maxLength="10"
                  pattern="[0-9]{10}"
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>Password</label>
              </td>
              <td>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  minLength="8"
                  required
                />
              </td>
            </tr>

            <tr>
              <td colSpan="2" align="center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <hr />

<h3 align="center">Preview</h3>

<table
  border="1"
  cellPadding="10"
  cellSpacing="0"
  align="center"
>
  <tbody>
    <tr>
      <td><strong>Name</strong></td>
      <td>{user.name || "Not Entered"}</td>
    </tr>

    <tr>
      <td><strong>Email</strong></td>
      <td>{user.email || "Not Entered"}</td>
    </tr>

    <tr>
      <td><strong>Mobile Number</strong></td>
      <td>{user.mobile || "Not Entered"}</td>
    </tr>

    <tr>
      <td><strong>Password</strong></td>
      <td>{user.password || "Not Entered"}</td>
    </tr>
  </tbody>
</table>
    </div>
  );
}

export default FormExample;