// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./LogIn.css";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="login-wrapper">
//       <div className="bubble bubble1"></div>
//       <div className="bubble bubble2"></div>
//       <div className="bubble bubble3"></div>

//       <div className="login-card">
//         <h2>Welcome Back 🌊</h2>
//         <p className="subtitle">Login to continue exploring</p>

//         <form>
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
//             Login
//           </button>
//         </form>

//         <p className="footer-text">
//           Don’t have an account? <Link to="/signup">Sign up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// // import API from "../../api/axios";
// import API from "../../../api/axiox";
// import "./LogIn.css";

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await API.post("/auth/login", {
//         email,
//         password,
//       });
//       const token = res.headers["authorization"];

//       localStorage.setItem("token", res.data.token);
//       alert("Login Success 🎉");

//       navigate("/"); 
//     } catch (err) {
//       alert("Invalid email or password");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-card">
//         <h2>Welcome Back 🌊</h2>

//         <form onSubmit={handleLogin}>
//           <div className="input-group">
//             <input
//               type="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder=" "
//             />
//             <label>Email</label>
//           </div>

//           <div className="input-group">
//             <input
//               type={showPassword ? "text" : "password"}
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder=" "
//             />
//             <label>Password</label>
//             <span className="toggle" onClick={() => setShowPassword(!showPassword)}>
//               {showPassword ? "Hide" : "Show"}
//             </span>
//           </div>

//           <button type="submit" className="login-btn">Login</button>
//         </form>

//         <p className="footer-text">
//           Don’t have an account? <Link to="/signup">Sign up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../../api/axiox";
import { toast } from "react-toastify";
import "./LogIn.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      // ✅ Backend sends token in body
      const token = res.data.token;
      localStorage.setItem("token", token);

      toast.success("Login successful 🎉");
      navigate("/");
    } catch (err) {
      toast.error("Invalid email or password ❌");
      console.error(err);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Welcome Back 🌊</h2>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
            />
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

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="footer-text">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;