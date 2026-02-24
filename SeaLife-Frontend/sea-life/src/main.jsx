// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CartProvider } from "./Components/CartContext/CartContext";
import { FavouritesProvider } from "./Components/pages/Favourites/FavouritesContext.jsx"; // adjust path if needed

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <FavouritesProvider>
        <App />
      </FavouritesProvider>
    </CartProvider>
  </StrictMode>
);