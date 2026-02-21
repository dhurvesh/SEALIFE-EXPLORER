// import { useCart } from "../../CartContext/CartContext";
// import "./Checkout.css";

// export default function Checkout() {
//   const { cartItems } = useCart();

//   const total = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="checkout-page">
//       <div className="checkout-container">
//         <div className="checkout-form">
//           <h2>Billing Details</h2>

//           <input type="text" placeholder="Full Name" />
//           <input type="email" placeholder="Email Address" />
//           <input type="text" placeholder="Address" />
//           <input type="text" placeholder="City" />
//           <input type="text" placeholder="Postal Code" />

//           <button className="pay-btn">Pay Now</button>
//         </div>

//         <div className="order-summary">
//           <h2>Order Summary</h2>

//           {cartItems.map((item) => (
//             <div key={item.id} className="summary-item">
//               <span>{item.name} × {item.quantity}</span>
//               <span>₹{item.price * item.quantity}</span>
//             </div>
//           ))}

//           <div className="summary-total">
//             <strong>Total</strong>
//             <strong>₹{total}</strong>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useCart } from "../../CartContext/CartContext";
import { useState } from "react";
import { motion } from "framer-motion";
import "./Checkout.css";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postal: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    // Validation
    if (
      !form.name ||
      !form.email ||
      !form.address ||
      !form.city ||
      !form.postal
    ) {
      setError("All fields are required!");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      clearCart();
    }, 2000);
  };

  if (success) {
    return (
      <div className="success-page">
        <div className="success-card">
          <h2>Payment Successful 🎉</h2>
          <p>Thank you for your purchase!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-form">
          <h2>Billing Details</h2>

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />
          <input
            name="address"
            placeholder="Address"
            onChange={handleChange}
          />
          <input
            name="city"
            placeholder="City"
            onChange={handleChange}
          />
          <input
            name="postal"
            placeholder="Postal Code"
            onChange={handleChange}
          />

          {error && <p className="error">{error}</p>}

          <button className="pay-btn" onClick={handlePayment}>
            {loading ? "Processing..." : `Pay ₹${total}`}
          </button>
        </div>
        <div className="order-summary">
          <h2>Order Summary</h2>

          {cartItems.map((item) => (
            <div key={item.id} className="summary-item">
              <span>{item.name} × {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}

          <div className="summary-total">
            <strong>Total</strong>
            <strong>₹{total}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
