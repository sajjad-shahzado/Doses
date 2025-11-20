import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// External Libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// Custom Components
import Navbar from './AllComp/Navbar';
import Home from './AllComp/Home';
import Aboutus from './AllComp/Aboutus';
import Clients from './AllComp/Clients';
import Services from './AllComp/Services';
import Projects from './AllComp/Projects';
import Contactus from './AllComp/Contactus';
import Footer from './AllComp/Footer';
import Form from "./AllComp/Form";

// App Wrapper
function App() {
  return (
    <div className="App">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Router for main pages */}
      <Router>
        <Routes>
          {/* Landing/Home Page */}
          <Route path="/" element={<Home />} />

          {/* Individual Pages */}
          <Route path="/projects-only" element={<Projects />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/form" element={<Form />} />

          {/* Custom Route: Example error (404) page */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>

      {/* Main site sections (these are outside router, so always render) */}
      <section>
        {/* Client Section */}
        <Clients />

        {/* Services Section */}
        <Services />

        {/* About Us Section */}
        <Aboutus />

        {/* Contact Us Section */}
        <Contactus />

        {/* Main Form Section */}
        <Form />
      </section>

      {/* Footer (always shown) */}
      <Footer />

      {/* Extra spacing for layout/visual separation */}
      <div style={{ marginBottom: "40px" }}></div>
    </div>
  );
}

// If you had any global context, add provider here
// Example:
// import { AppProvider } from './context/AppContext';
// Wrap <AppProvider> around main <App /> if needed

export default App;

// --- End of file (99 lines) ---
