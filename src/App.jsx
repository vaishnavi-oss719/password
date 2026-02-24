// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import ForgotPassword from "./pages/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/forgot" element={<ForgotPassword />} />
//         <Route path="/reset/:token" element={<ResetPassword />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import ForgotPassword from "./pages/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword";
// import UpdateEmail from "./pages/UpdateEmail";
// import "./App.css";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/forgot" element={<ForgotPassword />} />
//         <Route path="/reset/:token" element={<ResetPassword />} />
//         <Route path="/update-email/:userId" element={<UpdateEmail />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import UpdateEmail from "./pages/UpdateEmail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route "/" → redirect to /login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Auth routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset/:token" element={<ResetPassword />} />
        <Route path="/update-email/:userId" element={<UpdateEmail />} />

        {/* Optional: 404 fallback */}
        <Route path="*" element={<h2 style={{ textAlign: "center", marginTop: "50px" }}>404 Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;