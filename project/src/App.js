import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./movies/home";
import Movies from "./movies/movies";
import Viewbutton from "./movies/viewbutton";
import Cart from "./movies/cart";
import Navbar from "./movies/navbar";
import Contact from "./movies/contact";
import Login from "./movies/login";
import About from "./movies/about";
import Protect from "./movies/protect";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleClick = (item) => {
    const isPresent = cart.some((product) => product.id === item.id);
    if (isPresent) {
      alert("This movie already in cart. Please select a different movie.");
    } else {
      setCart([...cart, item]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar size={cart.length}  setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />} />
          
          <Route element={<Protect isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} navigate={Navigate} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<Movies userName={userName} handleClick={handleClick} />} />
            <Route path="/viewbutton/:_id" element={<Viewbutton />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleClick={handleClick} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;


// App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
// import Navbar from './Navbar';
// import LoginPage from './LoginPage';
// import HomePage from './HomePage';
// import AboutPage from './AboutPage';

// const App = () => {
//   const location = useLocation();

//   return (
//     <div>
//       {/* Conditionally render Navbar based on the current route */}
//       {location.pathname !== '/login' && <Navbar />}
      
//       <Switch>
//         <Route path="/login" component={LoginPage} />
//         <Route path="/about" component={AboutPage} />
//         <Route path="/" component={HomePage} />
//       </Switch>
//     </div>
//   );
// };

// const AppWrapper = () => (
//   <Router>
//     <App />
//   </Router>
// );

// export default AppWrapper;
