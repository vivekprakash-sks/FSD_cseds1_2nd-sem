import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (name.trim() === "") {
      formErrors.name = "Name is required";
    }
    if (!email.includes("@")) {
      formErrors.email = "Email must contain @";
    }
    if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const newUser = {
        name: name,
        email: email,
      };
      
      setUsers([...users, newUser]);
      setSuccess("Registration Successful!");
      setName("");
      setEmail("");
      setPassword("");
      setErrors({});
    } else {
      setSuccess("");
    }
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <div className="error">{errors.name}</div>}

        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div className="error">{errors.password}</div>}

        <button type="submit">Register</button>
      </form>

      {success && <div className="success">{success}</div>}

      {users.length > 0 && (
        <div className="apiData">
          <h4>Registered Users</h4>
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;