import React, {useEffect, useState} from 'react';
import {TextField, Switch, FormControlLabel} from '@mui/material'
import axios from 'axios'
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const War = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [responseData, setResponseData] = useState({});
  const [war, setWar] = useState([]);
  const [loading, setLoading]  = useState(false);
  const [chart, setChart] = useState([]);
  const [showHitting, setShowHitting] = useState(true);
  const [showPitching, setShowPitching] = useState(true);

  useEffect(() => {
    if(lastName !== ''){
      axios.put('http://localhost:8000/api/getWar/', {firstName, lastName})
        .then(response => {
          setResponseData(response.data)
          props.setLoading(false);
        })
        .catch(error => {
          console.log(error);
          props.setLoading(false);
        });
    }
  },[lastName])

  useEffect(() => {
    let w = [];
    const c = [];
    let fangraphsHitting = [];
    let fangraphsPitching = [];
    let brefHitting = [];
    let brefPitching = [];
    let fangraphsHittingCum = 0;
    let fangraphsPitchingCum = 0;
    let brefHittingCum = 0;
    let brefPitchingCum = 0;

    if( Object.keys(responseData).length > 0){

      if(showHitting) {
        responseData.fangraphsHitting.map((fi, i) => {
          fangraphsHitting.push({
            year: fi.Season,
            fangraphsHittingWar: fi.WAR,
            careerFangraphsHittingWar: fi.WAR + fangraphsHittingCum
          })
          fangraphsHittingCum += fi.WAR;
        })
        c.push(<Bar name='Fangraphs hitting war' dataKey="fangraphsHittingWar" barSize={20} fill="#50ae26" />)
        c.push(<Line name='Career Fangraphs hitting war' type="monotone" dataKey="careerFangraphsHittingWar" stroke="#50ae26" />)
      }

      if(showPitching) {
        responseData.fangraphsPitching.map((fi, i) => {
          fangraphsPitching.push({
            year: fi.Season,
            fangraphsPitchingWar: fi.WAR,
            careerFangraphsPitchingWar: fi.WAR + fangraphsPitchingCum
          })
          fangraphsPitchingCum += fi.WAR;
        })
        c.push(<Bar name='Fangraphs Pitching war' dataKey="fangraphsPitchingWar" barSize={20} fill="#50ae26" />)
        c.push(<Line name='Career Fangraphs pitchting war' type="monotone" dataKey="careerFangraphsPitchingWar" stroke="#50ae26" />)

      }

      if (Array.isArray(responseData.brefHitting) && showHitting) {
        responseData.brefHitting?.map((bi) => {
          brefHitting.push({
            year: bi.year_ID,
            brefHittingWar: bi.WAR,
            careerBrefHittingWar: bi.WAR + brefHittingCum
          })
          brefHittingCum += bi.WAR;
        })
        c.push(<Bar name='Baseball Reference hitting war' dataKey="brefHittingWar" barSize={20} fill="#82081b" />)
        c.push(<Line name='Career Baseball Reference hitting war' type="monotone" dataKey="careerBrefHittingWar" stroke="#82081b" />)
      }

      if (Array.isArray(responseData.brefPitching) && showPitching) {
        responseData.brefPitching?.map((bi) => {
          brefPitching.push({
            year: bi.year_ID,
            brefPitchingWar: bi.WAR,
            careerBrefPitchingWar: bi.WAR + brefPitchingCum
          })
          brefPitchingCum += bi.WAR;
        })
        c.push(<Bar name='Baseball Reference pitching war' dataKey="brefPitchingWar" barSize={20} fill="#82081b" />)
        c.push(<Line name='Career Baseball Reference pitching war' type="monotone" dataKey="careerBrefPitchingWar" stroke="#82081b" />)
      }

      w = Object.values(Object.groupBy([...brefPitching, ...brefHitting, ...fangraphsPitching, ...fangraphsHitting],
        ({ year }) => year)).map(e => e.reduce((acc, cur) => ({ ...acc, ...cur }))
      );


      setWar(w);
      setChart(c);
    }
  },[responseData, showHitting, showPitching])

  const setName = (val) => {
    const name = val.target.value.split(' ');
    setFirstName(name[0]);
    setLastName(name[1]);
    props.setLoading(true);
  }

  return <div style={{width: '100%', height: '90vh'}}
  >
  <h2 style={{display: 'flex', justifyContent: 'center'}}>Compare player's War from Fangraphs and Baseball Reference</h2>
  <div style={{display: 'flex'}}>
    <TextField label={"Enter a player's name"} sx={{background: '#FFF'}} onBlur={setName}/>
    <FormControlLabel label={'Show Hitting'} control={<Switch checked={showHitting} onClick={(val) => {setShowHitting(val.target.checked)}} />} />
    <FormControlLabel label={'Show Pitching'} control={<Switch checked={showPitching} onClick={(val) => {setShowPitching(val.target.checked)}} />} />
  </div>
  {
    Object.keys(responseData).length > 0 ?
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={400}
        data={war}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        {
          chart.map((c) => {return c})
        }
      </ComposedChart>
    </ResponsiveContainer>
    : null
  }
  </div>
}

export default War
