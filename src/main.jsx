import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/Header.jsx'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './components/Student/Login.jsx'
import Register from './components/Student/Register.jsx'

const AppLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};


const router = createBrowserRouter([
  {
    path:'/',
    element: <AppLayout/>,
    children:[
      {
        path:'/',
        element:<App/>
      },
      {
        path:'student/login',
        element:<Login/>
      },
      {
        path:'student/register',
        element:<Register/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
