import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

// Import Bootstrap and custom CSS styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/App.css";
// Define the App component
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        {/* <Navigation /> */}
        {/* <Header/> */}
        <div className="container mt-5">
          <Routes>
            <Route path="/nick-reece-react-portfolio/" element={<About />} />

            <Route path="/nick-reece-react-portfolio/about" element={<About />} />
            <Route path="/nick-reece-react-portfolio/portfolio" element={<Portfolio />} />
            <Route path="/nick-reece-react-portfolio/contact" element={<Contact />} />
            <Route path="/nick-reece-react-portfolio/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
// Render the Footer component
export default App;
