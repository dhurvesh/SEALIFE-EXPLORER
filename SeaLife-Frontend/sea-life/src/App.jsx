// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./Components/Navbar/Navbar.jsx";
// import Home from "./Components/Home/Home.jsx";
// import Details from "./Components/pages/details/Details.jsx";
// import Store from "./Components/pages/store/Store.jsx";
// import Quiz from "./Components/pages/Quiz/Quiz.jsx";
// import ContactUs from "./Components/pages/contact-us/ContactUs.jsx";
// import AboutUs from "./Components/pages/aboutus/AboutUs.jsx";
// import Favourites from "./Components/pages/Favourites/Favourites.jsx";
// import Ngo from "./Components/pages/ngo/NgoPage.jsx";
// import LogIn from "./Components/pages/LogIn/LogIn.jsx";
// import SignUp from "./Components/pages/SignUp/SignUp.jsx";

// import NotFound from "./Components/NotFound/NotFound.jsx";

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => setLoading(false), 2500);
//   }, []);

//   if (loading) return <OceanLoader />;
//   return (
//     <Router>
//       <div className='App'>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />

//           <Route path="/details" element={<Details />} />
//           <Route path="/store" element={<Store />} />
//           <Route path="/quiz" element={<Quiz />} />
//           <Route path="/contact" element={<ContactUs />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/favourites" element={<Favourites />} />
//           <Route path="/ngo" element={<Ngo />} />
//           <Route path="/LogIn" element={<LogIn />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </div>
//     </Router>

//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navbar from "./Components/Navbar/Navbar.jsx";
import OceanLoader from "./Components/Loader/OceanLoader.jsx";
import { useCart } from "./Components/CartContext/CartContext.jsx";


// Lazy load pages
const Home = lazy(() => import("./Components/Home/Home.jsx"));
const Details = lazy(() => import("./Components/pages/details/Details.jsx"));
const Store = lazy(() => import("./Components/pages/store/Store.jsx"));
const Quiz = lazy(() => import("./Components/pages/Quiz/Quiz.jsx"));
const ContactUs = lazy(() => import("./Components/pages/contact-us/ContactUs.jsx"));
const AboutUs = lazy(() => import("./Components/pages/aboutus/AboutUs.jsx"));
const Favourites = lazy(() => import("./Components/pages/Favourites/Favourites.jsx"));
const Ngo = lazy(() => import("./Components/pages/ngo/NgoPage.jsx"));
const LogIn = lazy(() => import("./Components/pages/LogIn/LogIn.jsx"));
const SignUp = lazy(() => import("./Components/pages/SignUp/SignUp.jsx"));
const NotFound = lazy(() => import("./Components/NotFound/NotFound.jsx"));
const Cart = lazy(() => import("./Components/pages/Cart/Cart.jsx"));
const Checkout = lazy(() => import("./Components/pages/Checkout/Checkout.jsx"));



function App() {
  // const { ready } = useCart();

  // if (!ready) return <OceanLoader />;
  return (
    <Router>
      <div className="app-layout">
        <Navbar />
        <main className="page-wrapper">
          {/* Suspense shows loader while page loads */}
          <Suspense fallback={<OceanLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details" element={<Details />} />
              <Route path="/store" element={<Store />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/ngo" element={<Ngo />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
