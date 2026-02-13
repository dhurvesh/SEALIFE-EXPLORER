import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Submitted 🌊");
  };

  return (
    <div className="login-wrapper">

      {/* Floating bubbles */}
      <div className="bubble bubble1"></div>
      <div className="bubble bubble2"></div>
      <div className="bubble bubble3"></div>

      <div className="login-card">
        <h2>Welcome Back</h2>
        <p className="subtitle">Dive back into the ocean world</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              required
            />
            <label>Password</label>

            <span
              className="toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>

          <button className="login-btn">Login</button>
        </form>

        <p className="footer-text">
          Don’t have an account? <span>Sign up</span>
        </p>
      </div>
    </div>
  );
}
