import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://new-reset.onrender.com/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      setMessage("Login successful");
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <p className="form-message">{message}</p>
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        <Link to="/forgot">Forgot Password?</Link>
      </p>
      <p style={{ textAlign: "center", marginTop: "5px" }}>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}