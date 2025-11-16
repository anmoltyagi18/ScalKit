import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import {
  Navbar,
  Hero,
  Cards,
  Services,
  WhyChooseUs,
  HowWeWork,
  Testimonials,
  Blogs,
  FAQs,
  ContactForm,
  BookingPage,
  Footer,
} from './components';

function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Cards />
      <Services />
      <WhyChooseUs />
      <HowWeWork />
      <Testimonials />
      <Blogs />
      <FAQs />
      <ContactForm />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />  {/* ← FIX ADDED HERE */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-a-call" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
