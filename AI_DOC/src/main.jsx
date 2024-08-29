import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes,RouterProvider, Link, BrowserRouter, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './components/App.css'
import Details from './components/Details.jsx'
import Predict from './Predict.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  {
    path : '/Details',
    element: <Details />
  },
  {
    path : '/Predict',
    element : <Predict />
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
  
)
