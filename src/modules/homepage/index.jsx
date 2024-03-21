import React from 'react';
import './style.css'

const Homepage = (props) => {

  const buttonClick = () => {
    console.log('!!!');
  }


  return <div className={'app'}>
  <div class={'header'}>
    <h1>MLB stats</h1>
    </div>
    <button onClick={() => buttonClick()}>click me</button>
  </div>;
};

export default Homepage;
