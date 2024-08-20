import React from 'react';
import './App.css';
import side from '../src/assets/Images/Hero/Side.png';
import Header from './Components/header/Header';
import SliderComponent from './Components/Slider/SliderComponent';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      
        <Header />
      <img src={side} alt="" className="sidehero" />

      <main>
        <div className="container2">
          <h2><span>A</span> New Way <span>to Learn</span></h2>
          <p>Develop Early Skills in Logic, Problem Solving, <br />and Reading Comprehension</p>
          <button type="button mt-4">Create Account</button>
        </div>
      </main>
      <SliderComponent />



      <Footer />
    </>
  );
}

export default App;
