import React, {useEffect, useState} from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material'

const TeamSelect = (props) => {

  return <div style={{width: 300}}>
  <FormControl fullWidth>
      <InputLabel id="team-select-label">Select a team</InputLabel>
      <Select labelId="team-select-label" label='Select a team' value={props.team} onChange={props.changeTeam}>
        <MenuItem value={''}>All teams</MenuItem>
        <MenuItem value={'angels'}>Angels</MenuItem>
        <MenuItem value={'astros'}>Astros</MenuItem>
        <MenuItem value={'athletics'}>Athletics</MenuItem>
        <MenuItem value={'bluejays'}>Blue Jays</MenuItem>
        <MenuItem value={'braves'}>Braves</MenuItem>
        <MenuItem value={'brewers'}>Brewers</MenuItem>
        <MenuItem value={'cardinals'}>Cardinals</MenuItem>
        <MenuItem value={'cubs'}>Cubs</MenuItem>
        <MenuItem value={'diamondbacks'}>Diamondbacks</MenuItem>
        <MenuItem value={'dodgers'}>Dodgers</MenuItem>
        <MenuItem value={'giants'}>Giants</MenuItem>
        <MenuItem value={'guardians'}>Guardians</MenuItem>
        <MenuItem value={'mariners'}>Mariners</MenuItem>
        <MenuItem value={'marlins'}>Marlins</MenuItem>
        <MenuItem value={'mets'}>Mets</MenuItem>
        <MenuItem value={'nationals'}>Nationals</MenuItem>
        <MenuItem value={'orioles'}>Orioles</MenuItem>
        <MenuItem value={'padres'}>Padres</MenuItem>
        <MenuItem value={'phillies'}>Phillies</MenuItem>
        <MenuItem value={'pirates'}>Pirates</MenuItem>
        <MenuItem value={'rangers'}>Rangers</MenuItem>
        <MenuItem value={'rays'}>Rays</MenuItem>
        <MenuItem value={'reds'}>Reds</MenuItem>
        <MenuItem value={'redsox'}>Red Soxs</MenuItem>
        <MenuItem value={'rockies'}>Rockies</MenuItem>
        <MenuItem value={'royals'}>Royals</MenuItem>
        <MenuItem value={'tigers'}>Tigers</MenuItem>
        <MenuItem value={'twins'}>Twins</MenuItem>
        <MenuItem value={'whitesoxs'}>White Soxs</MenuItem>
        <MenuItem value={'yankees'}>Yankees</MenuItem>
      </Select>
    </FormControl>
  </div>
};

export default TeamSelect;
