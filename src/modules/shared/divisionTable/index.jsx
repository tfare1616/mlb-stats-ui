import React from 'react';
import { Table, Paper, TableContainer, TableHead, TableBody, TableCell, TableRow } from '@mui/material'

const DivisionTable = (props) => {

  return <TableContainer component={Paper} style={{margin: '25px 0'}}>
  <h1 style={{padding: '0 10px'}}>{props.divisionName}</h1>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Team</TableCell>
          <TableCell>Wins</TableCell>
          <TableCell>Loss</TableCell>
          <TableCell>Wins - loss percentage</TableCell>
          <TableCell>Games behind</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      { props.division.map((team) => {
        return(
        <TableRow>
          <TableCell>{team.Tm}</TableCell>
          <TableCell>{team.W}</TableCell>
          <TableCell>{team.L}</TableCell>
          <TableCell>{team['W-L%']}</TableCell>
          <TableCell>{team.GB}</TableCell>
        </TableRow>)}
      )
    }
      </TableBody>
    </Table>
  </TableContainer>
}

export default DivisionTable;
