import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../Pages/Home/Home'
import UserLogin from '../Pages/Userlogin/UserLogin'
import SingleRoom from '../Pages/SingleRoom/SingleRoom'
import PrivateRoute from './PrivateRoute'
import Dashboard from '../layouts/Dashboard'
import AddRoom from '../Pages/Dashboard/AddRoom'
import useSingleRoom from '../Hooks/useSingleRoom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <UserLogin />
      },
      {
        path: "/room/:id",
        element: <PrivateRoute><SingleRoom /></PrivateRoute>,
        loader: ({params}) => useSingleRoom(params),
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/add-room",
        element: <AddRoom />
      }
    ]
  }
])
