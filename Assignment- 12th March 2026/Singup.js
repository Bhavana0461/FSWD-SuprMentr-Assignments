import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validate = () => {
    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email");
      return false;
    }

    // Password validation (1 uppercase, 1 number, min 6 chars)
    if (!/(?=.*[A-Z])(?=.*[0-9]).{6,}/.test(password)) {
      setError("Password must have 1 uppercase, 1 number, min 6 characters");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSuccess("Signup Successful!");
      setEmail("");
      setPassword("");
    } else {
      setSuccess("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Smart Signup Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {/* Error Message */}
      <p style={{ color: "red" }}>{error}</p>

      {/* Success Message */}
      <p style={{ color: "green" }}>{success}</p>
    </div>
  );
}

export default Signup;