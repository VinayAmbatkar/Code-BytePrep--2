import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import side from './assets/Images/Hero/Side.png'; // Adjust the path if necessary
import Header from './Components/header/Header';
import SliderComponent from './Components/Slider/SliderComponent';
import Footer from './Components/Footer/Footer';
import Login from './Pages/Autentication Page/Login'; // Ensure the path is correct

// Landing Page Component
function LandingPage() {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/auth');
  };

  return (
    <>
      <Header />
      <img src={side} alt="Side Hero" className="sidehero" />
      <main>
        <div className="container2">
          <h2><span>A</span> New Way <span>to Learn</span></h2>
          <p>Develop Early Skills in Logic, Problem Solving, <br />and Reading Comprehension</p> <br />
          <button type="button" className="mt-4" onClick={handleCreateAccount}>
            GET STARTED
          </button>
        </div>
      </main>
      <SliderComponent />
      <Footer />
    </>
  );
}

// App Component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
