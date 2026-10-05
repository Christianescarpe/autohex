import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesIndex from './pages/ServicesIndex';
import ServicePage from './pages/ServicePage';
import LocationsIndex from './pages/LocationsIndex';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="noise min-h-screen" style={{ background: 'var(--bg)' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/locations" element={<LocationsIndex />} />
        <Route path="/locations/:slug" element={<LocationPage />} />
        <Route path="/locations/iloilo-city/:slug" element={<LocationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
