import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import TopProspects from '../modules/topProspects'
import Welcome from '../modules/welcome'

const router = createBrowserRouter([
  {
    path: "*",
    element: <Welcome/>,
  },
  {
    path: '/prospects',
    element: <TopProspects/>
  }
]);

export default router
