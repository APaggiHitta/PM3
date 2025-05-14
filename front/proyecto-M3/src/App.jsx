import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home/Home";
import Turns from "./views/Turns/Turns";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import Contact from "./views/Contact/Contact";

function App() {
  return (
    <div>
      <NavBar />
      {/* <Home /> */}
      {/* <Turns /> */}
      <Register />
      {/* <Login /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
