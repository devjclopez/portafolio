import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";

// aos animation library
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ContactPage from "./pages/ContactPage";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 500 });
  }, []);
  return (
    <div className="bg-[#282C33]">
      {/* react-router-dom */}
      <Navbar />
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

