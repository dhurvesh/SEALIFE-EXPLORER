// import React, { useEffect, useRef } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import "./Navbar.css";
// import { useCart } from "../CartContext/CartContext";


// const Navbar = () => {
//   const navRef = useRef(null);
//   const blobRef = useRef(null);
//   const location = useLocation();

//   useEffect(() => {
//     const moveBlob = () => {
//       requestAnimationFrame(() => {
//         const active = navRef.current?.querySelector("a.active");
//         if (active && blobRef.current) {
//           blobRef.current.style.left = active.offsetLeft + "px";
//           blobRef.current.style.width = active.offsetWidth + "px";
//         }
//       });
//     };

//     moveBlob();
//     window.addEventListener("resize", moveBlob);

//     return () => window.removeEventListener("resize", moveBlob);
//   }, [location.pathname]);


//   const { cartItems } = useCart();


//   return (
//     <header className="navbar">
//       <NavLink to="/favourites" className="fav-btn">
//         ❤ Favourites
//       </NavLink>

//       <NavLink to="/" className="logo">
//         OCEAN<span>EXPLORE</span>
//       </NavLink>


//       <nav className="nav-links">
//         <div className="gooey-wrapper" ref={navRef}>
//           <span className="gooey-blob" ref={blobRef}></span>

//           {/* 🔍 Search Button */}
//           <button className="search-btn">
//             🔍
//           </button>

//           <NavLink to="/" end>Home</NavLink>
//           <NavLink to="/details">Details</NavLink>
//           <NavLink to="/store">Store</NavLink>
//           <NavLink to="/ngo">Ngo’s</NavLink>
//           <NavLink to="/quiz">Quiz</NavLink>
//           <NavLink to="/contact">Contact us</NavLink>
//           <NavLink to="/about">About Us</NavLink>
//           <NavLink to="/LogIn">Log In</NavLink>
//           <NavLink to="/cart">🛒({cartItems.length})</NavLink>


//         </div>
//       </nav>

//       {/* Gooey Filter */}
//       <svg width="0" height="0">
//         <defs>
//           <filter id="goo">
//             <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
//             <feColorMatrix
//               in="blur"
//               mode="matrix"
//               values="
//                 1 0 0 0 0  
//                 0 1 0 0 0  
//                 0 0 1 0 0  
//                 0 0 0 20 -8"
//             />
//           </filter>
//         </defs>
//       </svg>
//     </header>
//   );
// };

// export default Navbar;

import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useCart } from "../CartContext/CartContext";

const Navbar = () => {
  const navRef = useRef(null);
  const blobRef = useRef(null);
  const searchRef = useRef(null);
  const searchBoxRef = useRef(null);
  const location = useLocation();
  const { cartItems } = useCart();

  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const moveBlob = () => {
      requestAnimationFrame(() => {
        const active = navRef.current?.querySelector("a.active");
        if (active && blobRef.current) {
          blobRef.current.style.left = active.offsetLeft + "px";
          blobRef.current.style.width = active.offsetWidth + "px";
        }
      });
    };
    

    moveBlob();
    window.addEventListener("resize", moveBlob);
    return () => window.removeEventListener("resize", moveBlob);
  }, [location.pathname]);

  // Auto focus when opened
  useEffect(() => {
    if (showSearch) {
      searchRef.current?.focus();
    }
  }, [showSearch]);
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (!showSearch) return;

    if (
      searchBoxRef.current &&
      !searchBoxRef.current.contains(event.target)
    ) {
      setShowSearch(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [showSearch]);

  return (
    <header className="navbar">
      <NavLink to="/favourites" className="fav-btn">
        ❤ Favourites
      </NavLink>

      <NavLink to="/" className="logo">
        OCEAN<span>EXPLORE</span>
      </NavLink>

      <nav className="nav-links">
        <div className="gooey-wrapper" ref={navRef}>
          <span className="gooey-blob" ref={blobRef}></span>

          {/* 🔍 Search Button */}
          <button
            className="search-btn"
            onClick={() => setShowSearch(true)}
          >
            🔍
          </button>

          {/* Premium Search Overlay */}
          <div className={`search-overlay ${showSearch ? "active" : ""}`}>
            <div className="search-container" ref={searchBoxRef}>
              <span className="search-icon">🔍</span>
              <input
                ref={searchRef}
                type="text"
                placeholder="Search marine life..."
              />
              <button
                className="close-button"
                onClick={() => setShowSearch(false)}
              >
                ✕
              </button>
            </div>
          </div>

          {!showSearch && (
            <>
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="/details">Details</NavLink>
              <NavLink to="/store">Store</NavLink>
              <NavLink to="/ngo">Ngo’s</NavLink>
              <NavLink to="/quiz">Quiz</NavLink>
              <NavLink to="/contact">Contact us</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/LogIn">Log In</NavLink>
              <NavLink to="/cart">🛒({cartItems.length})</NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;