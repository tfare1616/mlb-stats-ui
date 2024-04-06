import React, {useEffect, useState} from 'react';
import {TextField} from '@mui/material'
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

const BatterData = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fangraphs, setFangraphs] = useState([]);
  const [bref, setBref] = useState([]);
  const [war, setWar] = useState([]);


  useEffect(() => {
    if(lastName !== ''){
      axios.put('http://localhost:8000/api/getBatting/', {firstName, lastName})
        .then(response => {
          setFangraphs(response.data.fangraphs);
          setBref(response.data.bwar);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },[lastName])

  useEffect(() => {
    let w = [];
    let wi = {}
    let f = 0;
    let b = 0;
    if(fangraphs.length > 0 && bref.length > 0){
      for(let i = 0; i < fangraphs.length; i ++){
        f += fangraphs[i].WAR;
        b += bref[i].WAR;
        wi={
          year: bref[i].year_ID,
          f: fangraphs[i].WAR,
          fc: f,
          b: bref[i].WAR,
          bc: b,
        }
        w.push(wi)
        wi = {};
      }
      setWar(w);
      console.log(w);
    }
  },[fangraphs])

  const setName = (val) => {
    const name = val.target.value.split(' ');
    setFirstName(name[0]);
    setLastName(name[1])
  }

  return <div style={{width: '90vw', height: '90vh'}}>
  <TextField label={"Enter a player's name"} onBlur={setName}/>
  {
    fangraphs.length > 0 ?
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
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="year" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="b" barSize={20} fill="#ff7300" />
        <Bar dataKey="f" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="bc" stroke="#ff7300" />
        <Line type="monotone" dataKey="fc" stroke="#413ea0" />
      </ComposedChart>
    </ResponsiveContainer>
    : null
  }
  </div>
}

export default BatterData
