import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post(`https://new-reset.onrender.com/api/auth/reset/${token}`, { password });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Reset failed");
    }
  };

  return (
    <div className="form-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input type="password" placeholder="New Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} required onChange={(e) => setConfirmPassword(e.target.value)} />
        <button type="submit">Reset Password</button>
      </form>
      <p className="form-message">{message}</p>
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        <Link to="/login">Back to Login</Link>
      </p>
    </div>
  );
}