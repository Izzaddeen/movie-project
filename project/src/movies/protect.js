// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";


// const Protect = ({ isLoggedIn }) => {
    
//       if (!isLoggedIn) {
//         return <Navigate to="/" />; 
//       }
    
//     return <Outlet /> ;
//   };
// export default Protect;






// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const Protect = ({ isLoggedIn }) => {
//   if (!isLoggedIn) {
//     return <Navigate to="/login" />; 
//   }
//   return <Outlet />;
// };

// export default Protect;






import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Protect = ({ isLoggedIn }) => {
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default Protect;
