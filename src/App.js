import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";
import Scholarships from "./pages/Scholarships";
import ScholarshipDetails from "./pages/ScholarshipDetails";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import Preloader from "./components/Preloader";
import ThankYou from "./pages/ThankYou";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider> {/* Wrap your app with HelmetProvider */}
      <ErrorBoundary>
        {loading ? (
          <Preloader />
        ) : (
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<NewsDetails />} />
              <Route path="/scholarships" element={<Scholarships />} />
              <Route path="/scholarships/:id" element={<ScholarshipDetails />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
                <Route path="thank-you" element={<ThankYou />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        )}
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;
