import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path:"",
        element: <Home />
      },
      {
        path:"about",
        element: <About />
      },
      {
        path:"contact-us",
        element: <Contact />
      },
      {
        path:"github",
        element: <Github />
      }
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact-us' element={<Contact />} />
//       <Route path='user/:userid' element={<User />} />
//       <Route 
      
//       path='github' 
//       element={<Github />}
//        />
//     </Route>
//   )
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
