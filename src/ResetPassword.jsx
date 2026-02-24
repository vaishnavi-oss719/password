import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://new-reset-1.onrender.com/api/auth/reset/" + token,
        { password }
      );

      alert("Password reset successful");
    } catch (error) {
      alert("Reset failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        <button type="submit">Reset</button>
      </form>
    </div>
  );
}

export default ResetPassword;