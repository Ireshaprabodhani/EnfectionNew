import React from 'react'
import './Home.css';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
const Home = () => {
 
  return (
    <div>
      <div className="home-container">
        <Header />
        <div className="main-title">
          <h1 className="animated-text">
            <span className="w">W</span>
            <span className="e">E</span>
            <span className="l">L</span>
            <span className="c">C</span>
            <span className="o">O</span>
            <span className="m">M</span>
            <span className="E">E</span>
          </h1>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home
