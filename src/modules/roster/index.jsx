import React, {useState, useEffect} from 'react'
import TeamSelect from '../shared/teamSelect'
import { Table, Paper, TableContainer, TableHead, TableBody, TableCell, TableRow } from '@mui/material'
import axios from 'axios'

const Roster = (props) => {
  const [roster, setRoster] = useState([]);
  const [team, setTeam] = useState('');

  useEffect(() => {
    if(team !== '') {
      axios.put('http://localhost:8000/api/teamId/', {team})
        .then(response => {
          axios.get("https://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id='" + response.data.teamId + "'")
            .then(res => {
              setRoster(res.data.roster_40.queryResults.row)
            })
            .catch(error => {
              console.log(error);
            });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },[team]);

  const changeTeam = (event) => {
    setTeam(event.target.value)
  }

  return <div>
  <TeamSelect allowAll={false} team={team} changeTeam={changeTeam}/>

  {roster.length > 0 ?
    <TableContainer sx={{marginTop: '20px',}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell>Height</TableCell>
            <TableCell>Weight</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Bats</TableCell>
            <TableCell>Throws</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { roster.map((player)=> (
          <TableRow key={player.name_display_first_last}>
            <TableCell>{player.name_display_first_last}</TableCell>
            <TableCell>{player.height_feet + `'` + player.height_inches}</TableCell>
            <TableCell>{player.weight}</TableCell>
            <TableCell>{player.position_txt}</TableCell>
            <TableCell>{player.bats}</TableCell>
            <TableCell>{player.throws}</TableCell>
          </TableRow>
        ))
        }
        </TableBody>
      </Table>
    </TableContainer>
  : null
  }
  </div>
}

export default Roster
