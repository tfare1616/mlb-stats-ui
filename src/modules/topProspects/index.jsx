import React, {useEffect, useState} from 'react';
import TeamSelect from '../shared/teamSelect'
import { Table, Paper, TableContainer, TableHead, TableBody, TableCell, TableRow } from '@mui/material'
import axios from 'axios'

const TopProspects = (props) => {
  const [prospects, setProspects] = useState([]);
  const [team, setTeam] = useState('');
  const [playerType, setPlayerType] = useState('');

  useEffect(() => {
    axios.put('http://localhost:8000/api/topProspects/', {team, playerType})
      .then(response => {
        setProspects(response.data.prospects);
      })
      .catch(error => {
        console.log(error);
      });
  },[team, playerType])

  const changeTeam = (event) => {
    setTeam(event.target.value)
  }

  return <div className={'topProspects'}>
    <TeamSelect team={team} changeTeam={changeTeam}/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Rank</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { prospects.map((prospect)=> (
          <TableRow>
            <TableCell>{prospect.Player}</TableCell>
            <TableCell>{prospect.Age}</TableCell>
            <TableCell>{prospect.Rk}</TableCell>
          </TableRow>
        ))
        }
        </TableBody>
      </Table>
    </TableContainer>
  </div>;
};

export default TopProspects;
