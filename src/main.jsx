import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import RootLayout from './routes/RootLayout'
import LandingPage from './routes/LandingPage.jsx'
import Collections from './routes/Collections'
import About from './routes/About'
import Blog from './routes/Blog'
import Contact from './routes/Contact'
import Account from './routes/account/Account'
import Login from './routes/account/Login'
import Register from './routes/account/Register'
import { GoogleOAuthProvider } from '@react-oauth/google'

const router = createBrowserRouter([
  { path: '/', element: <RootLayout />, children: [
    { path: '/', element: <LandingPage />},
    { path: '/collections', element: <Collections /> },
    { path: '/about', element: <About /> },
    { path: '/blog', element: <Blog /> },
    { path: '/contact', element: <Contact /> },
    { path: '/account', element: <Account /> }, 
    { path: '/account/login', element: <Login />},
    { path: '/account/register', element: <Register /> },
  ] },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOC_ID}>
      <RouterProvider router={router}/>
    </GoogleOAuthProvider>
  </StrictMode>,
)
