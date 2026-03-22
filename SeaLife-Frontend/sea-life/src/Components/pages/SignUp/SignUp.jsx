// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../../pages/LogIn/LogIn.css"; // reuse same style

// const SignUp = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="login-wrapper">
//       <div className="bubble bubble1"></div>
//       <div className="bubble bubble2"></div>
//       <div className="bubble bubble3"></div>

//       <div className="login-card">
//         <h2>Create Account 🌊</h2>
//         <p className="subtitle">Join Ocean Explorer today</p>

//         <form>
//           <div className="input-group">
//             <input type="text" placeholder=" " required />
//             <label>Full Name</label>
//           </div>

//           <div className="input-group">
//             <input type="email" placeholder=" " required />
//             <label>Email</label>
//           </div>

//           <div className="input-group">
//             <input
//               type={showPassword ? "text" : "password"}
//               placeholder=" "
//               required
//             />
//             <label>Password</label>
//             <span
//               className="toggle"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? "Hide" : "Show"}
//             </span>
//           </div>

//           <button type="submit" className="login-btn">
//             Sign Up
//           </button>
//         </form>

//         <p className="footer-text">
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../../api/axiox";
import "../../pages/LogIn/LogIn.css";
import { toast } from "react-toastify";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleSignup = async (e) => {
  e.preventDefault();
  try {
    await API.post("/auth/signup", { name, email, password });

    toast.success("Signup successful 🎉 Login now");
    navigate("/login");
  } catch (err) {
    toast.error("Signup failed ❌ Email already exists?");
    console.error(err);
  }
};

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Create Account 🌊</h2>

        <form onSubmit={handleSignup}>
          <div className="input-group">
            <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder=" " />
            <label>Full Name</label>
          </div>

          <div className="input-group">
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" " />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
            />
            <label>Password</label>
            <span className="toggle" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <button type="submit" className="login-btn">Sign Up</button>
        </form>

        <p className="footer-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;