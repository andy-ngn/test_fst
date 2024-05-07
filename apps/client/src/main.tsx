import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import About from "./pages/About.tsx";
import Users from "./pages/Users.tsx";
import Navbar from "./components/Navbar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='/' element={<App />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);
