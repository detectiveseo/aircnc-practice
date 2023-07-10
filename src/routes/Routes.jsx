import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../Pages/Home/Home'
import UserLogin from '../Pages/Userlogin/UserLogin'
import SingleRoom from '../Pages/SingleRoom/SingleRoom'
import PrivateRoute from './PrivateRoute'

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
        path: "/room/:name",
        element: <PrivateRoute><SingleRoom /></PrivateRoute>
      }
    ]
  },
])
