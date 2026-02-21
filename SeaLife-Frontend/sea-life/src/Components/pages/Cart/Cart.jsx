import { useCart } from "../../CartContext/CartContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Cart.css";

export default function Cart() {
    const {
        cartItems,
        removeFromCart,
        increaseQty,
        decreaseQty,
    } = useCart();

    const navigate = useNavigate();

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="cart-page">
            <div className="cart-container">
                <h2>🛒 Your Cart</h2>

                <AnimatePresence>
                    {cartItems.map((item) => (
                        <motion.div
                            key={item.id}
                            className="cart-item"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="cart-left">
                                <img src={item.image} alt={item.name} />

                                <div>
                                    <h4>{item.name}</h4>
                                    <p>₹{item.price}</p>

                                    <div className="qty-controls">
                                        <button onClick={() => decreaseQty(item.id)}>−</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => increaseQty(item.id)}>+</button>
                                    </div>
                                </div>
                            </div>

                            <button
                                className="remove-btn"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </motion.div>

                    ))}
                </AnimatePresence>

                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <h3>Total: ₹{total}</h3>
                        <button
                            className="checkout-btn"
                            onClick={() => navigate("/checkout")}
                        >
                            Checkout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
