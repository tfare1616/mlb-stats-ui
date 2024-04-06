import React, {useEffect, useState} from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import DivisionTable from '../shared/divisionTable'
import dayjs from 'dayjs';
import axios from 'axios'

const Standings = (props) => {
  const [standings, setStandings] = useState([]);
  const [year, setYear] = useState('2024');

  const divisions = ['American League East', 'American League Central', 'American League West', 'National League East', 'National League Central', 'National League West']
  const divisions1993 = ['American League East', 'American League West', 'National League East', 'National League West']

  useEffect(() => {
    props.setLoading(true);
  },[])

  useEffect(() => {
    axios.put('http://localhost:8000/api/standings/', {date: year})
      .then(response => {
        const s = response.data.standings
        s.forEach((d) => {return d.sort((a,b) => {return parseFloat(b['W-L%'] - parseFloat(a['W-L%']) )})});
        setStandings(s);
        props.setLoading(false);
        console.log(response.data.standings);
      })
      .catch(error => {
        console.log(error);
        props.setLoading(false);
      });
  },[year]);

  return <div className={'standings'}>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker sx={{background: '#FFF'}} label={'Year'} disabled={props.loading} views={['year']} openTo="year" onChange={(val) => {props.setLoading(true); setYear(val.year().toString())}} value={dayjs(year, 'YYYY')}/>
  </LocalizationProvider>
  { standings.map((division, i) =>
    <DivisionTable division={division} divisionName={year > 1993 ? divisions[i] : divisions1993[i]} />
  )}
  </div>;
};

export default Standings;
