import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import MyAppointments from "./pages/MyAppointments";
import MyProfile from "./pages/MyProfile";
import Verify from "./pages/Verify";

const App = () => {
  const { token } = useContext(AppContext);
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment/:docId" element={<Appointment />} />

        {token && (
          <>
            <Route path="/my-appointments" element={<MyAppointments />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/verify" element={<Verify />} />
          </>
        )}

        {!token && (
          <>
            <Route
              path="/my-appointments"
              element={<Navigate to="/login" replace />}
            />
            <Route
              path="/my-profile"
              element={<Navigate to="/login" replace />}
            />
            <Route path="/verify" element={<Navigate to="/login" replace />} />
          </>
        )}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
