import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MusicPage from "./pages/MusicPage";
import GamingPage from "./pages/GamingPage";
import StreamingServicesPage from "./pages/StreamingServicesPage";
import BusinessServicesPage from "./pages/BusinessServicesPage";
import ContactPage from "./pages/ContactPage";
import CreatorIntakePage from "./pages/CreatorIntakePage";
import ThankYouPage from "./pages/ThankYouPage";

import heroBg from './assets/hero-bg.png';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen text-white">
        
        {/* Background Layer */}
        <div
          style={{ backgroundImage: `url(${heroBg})` }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-md brightness-50"
        />

        {/* Content Layer */}
        <div className="relative z-10">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/music" element={<MusicPage />} />
            <Route path="/gaming" element={<GamingPage />} />
            <Route path="/services/streaming" element={<StreamingServicesPage />} />
            <Route path="/services/business" element={<BusinessServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/creator-intake" element={<CreatorIntakePage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
