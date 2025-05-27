
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Navbar } from './Componets/Navbar'
import { HomePage } from './Componets/HomePage'
import { PasteItem } from './Componets/PasteItem'
import { PasteList } from './Componets/PasteList'
import React from 'react';



const router=createBrowserRouter(
  [
    {
      path: '/',
      element:
      <div>
        <Navbar/>
        <HomePage/>
      </div>
    },
    {
      path:"/pasteList",
      element:
      <div>
        <Navbar/>
        <PasteList/>
      </div> 
    },
    {
      path:"/pasteItem/:id",
      element:<div>
        <Navbar/>
        <PasteItem/>
      </div>
    }

  ]
)

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
