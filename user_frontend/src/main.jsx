import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './index.css'



import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import AboutUs from './Components/AboutUs/AboutUs.jsx'
import Contact from './Components/Contacts/Contact.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Signin from './Components/Authentications/Signin.jsx'
import Login from './Components/Authentications/Login.jsx'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<AboutUs />} />
      <Route path='contact' element={<Contact />} />
      <Route path='projects' element={<Projects />} >
      {/* <Route path='projects/:projectid' element={<ProjectDetails />} />        dynamic url  */}
      </Route>
      <Route path='signin' element={<Signin />} />
      <Route path='login' element={<Login />} />
    </Route>

  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
