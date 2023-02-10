import React from 'react'
import './Home.css';
import Header from '../../header/Header';
import { Button } from '@mui/material';
const Home = () => {
 
  return (
    <div>
      <div className="home-container">
        <Header />
        <div className="bg-container">
          <div className="main-title">
            <h1 className="animated-text">
              <span className='welcome'>WELCOME</span>
              <span className='to'>TO</span>
              <span className='fero'>FERO</span>
            </h1>
          </div>

          <div className='button_group'>
            <div className='button-login'>
              <Button>Login</Button>
            </div>
            <div className='button-signup'>
              <Button>Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Home
