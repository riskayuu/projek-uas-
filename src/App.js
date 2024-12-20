import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Kegiatan from "./pages/DetailKegiatan";
import DetailKegiatan from "./pages/DetailKegiatan";
import NotFound from "./pages/NotFound";
import InfoSection from "./components/InfoSection";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/kegiatan" element={<Kegiatan />} />
          <Route path="/kegiatandetail" element={<DetailKegiatan />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      
      <InfoSection />
      <Footer />
    </Router>
  );
}

export default App;
