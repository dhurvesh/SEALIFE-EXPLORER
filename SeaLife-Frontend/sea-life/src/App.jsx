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

// function App() {  
//   return (
//     <Router>
//       <div className='App'>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route path="/details" element={<Details />} />
//         <Route path="/store" element={<Store />} />
//         <Route path="/quiz" element={<Quiz />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/favourites" element={<Favourites />} />
//         <Route path="/ngo" element={<Ngo />} />
//       </Routes>
//       </div>
//     </Router>

//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import Details from "./Components/pages/details/Details.jsx";
import Store from "./Components/pages/store/Store.jsx";
import Quiz from "./Components/pages/Quiz/Quiz.jsx";
import ContactUs from "./Components/pages/contact-us/ContactUs.jsx";
import AboutUs from "./Components/pages/aboutus/AboutUs.jsx";
import Favourites from "./Components/pages/Favourites/Favourites.jsx";
import Ngo from "./Components/pages/ngo/NgoPage.jsx";

function App() {  
  return (
    <Router>
      <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/details" element={<Details />} />
        <Route path="/store" element={<Store />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/ngo" element={<Ngo />} />
      </Routes>
      </div>
    </Router>

  );
}

export default App;
