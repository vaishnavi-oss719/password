import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function UpdateEmail() {
  const { userId } = useParams();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`http://localhost:4000/api/auth/update-email/${userId}`, { email });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error updating email");
    }
  };

  return (
    <div className="form-container">
      <h2>Update Email</h2>
      <input
        type="email"
        placeholder="New Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Email</button>
      <p className="form-message">{message}</p>
    </div>
  );
}