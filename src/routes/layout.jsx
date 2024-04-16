import React, {useEffect, useState} from 'react';
import {Routes , Route} from 'react-router-dom';
import { CircularProgress } from '@mui/material'
import TopProspects from '../modules/topProspects'
import Homepage from '../modules/homepage'
import Standings from '../modules/standings'
import BatterData from '../modules/batterData'
import War from '../modules/war'
import Roster from '../modules/roster'

const Layout = (props) => {
  const [loading, setLoading] = useState(false);

return <div>
  {
    loading ?
      <div style={{zIndex: 1000, position: 'relative',}}>
        <CircularProgress size='80px' sx={{position: 'absolute', top: 'calc(50vh - 151px)', left: 'calc(50vw - 60px)'}}/>
      </div>
      : null
  }
  <Routes>
    <Route path="*" element={<Homepage/>} />
    <Route path="/prospects" element={<TopProspects setLoading={setLoading} loading={loading} />} />
    <Route path="/standings" element={<Standings setLoading={setLoading} loading={loading} />} />
    <Route path="/hitting" element={<BatterData setLoading={setLoading} loading={loading} />} />
    <Route path="/war" element={<War setLoading={setLoading} loading={loading} />} />
    <Route path="/roster" element={<Roster setLoading={setLoading} loading={loading} />} />
  </Routes>
</div>
}

export default Layout
