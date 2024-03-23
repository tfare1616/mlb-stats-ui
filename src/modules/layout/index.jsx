import React, {useEffect, useState} from 'react';
import {Routes , Route } from "react-router-dom" 
import TopProspects from '../topProspects'
import Welcome from '../welcome'
import axios from 'axios'
import './style.css'

const Layout = (props) => {

  return <div className={'app'}>
  <div className={'header'}>
    <h1>MLB stats</h1>
  </div>
  <div className={'contentWrapper'}>
    <Routes>
      <Route path="/" component={<Welcome/> } />
      <Route path="/prospects" component={<TopProspects/>} />
    </Routes>
    </div>
  </div>;
};

export default Layout;
