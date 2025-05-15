import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home/Home";
import Turns from "./views/Turns/Turns";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import Contact from "./views/Contact/Contact";
import About from "./views/About/About";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />

          <Route path="/home" element={<Home />} />
          <Route path="/turns" element={<Turns />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Falta about */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
