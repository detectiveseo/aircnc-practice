import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider'
import { router } from './routes/Routes'
import { Toaster } from 'react-hot-toast'
import Setlogin from './components/Shared/SharedLogin/Setlogin'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Setlogin>
    <AuthProvider>
      <Toaster />
      <RouterProvider router={router} />
    </AuthProvider>
  </Setlogin>

)
