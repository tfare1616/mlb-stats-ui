import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import TopProspects from '../modules/topProspects'
import Homepage from '../modules/homepage'
import Standings from '../modules/standings'
import BatterData from '../modules/batterData'

const router = createBrowserRouter([
  {
    path: "*",
    element: <Homepage/>,
  },
  {
    path: '/prospects',
    element: <TopProspects/>
  },
  {
    path: '/standings',
    element: <Standings/>
  },
  {
    path: '/hitting',
    element: <BatterData/>
  }
]);

export default router
