import React, {useState} from 'react'
import style from './style.css'
import MenuIcon from '@mui/icons-material/Menu';
import {Drawer, ListItem, List, ListItemText} from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (url) => {
    debugger;
    setOpen(false);
    navigate(`/${url}`)

  };

  return <div className={'header'}>
    <MenuIcon onClick={handleClick}/>
    <h1 style={{ textAlign: 'center' }} onCLick={() => {debugger; handleClose('')}}>MLB stats</h1>
    <div/>
    <Drawer
        id="sidebar"
        open={open}
        onClose={() => {setOpen(false)}}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <List>
          <ListItem onClick={() => {handleClose('prospects')}}><ListItemText primary={'Top Prospects'}/></ListItem>
          <ListItem onClick={() => {handleClose('standings')}}><ListItemText primary={'Standings'}/></ListItem>
          <ListItem onClick={() => {handleClose('hitting')}}><ListItemText primary={'Hitting Statistics'}/></ListItem>
          <ListItem onClick={() => {handleClose('war')}}><ListItemText primary={'War'}/></ListItem>
        </List>
      </Drawer>
  </div>
}

export default Header
