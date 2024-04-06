import React, {useEffect, useState} from 'react';
import {Routes , Route } from "react-router-dom" 
import './style.css'

const Layout = (props) => {

  return <div className={'app'}>
  <div className={'header'}>
    <h1>MLB stats</h1>
  </div>
  <div className={'contentWrapper'}>
    </div>
  </div>;
};

export default Layout;
