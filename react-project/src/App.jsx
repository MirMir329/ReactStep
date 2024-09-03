import Header from "./Header.jsx"
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import "./App.module.css"
import AppRouter from "./AppRouter.jsx"

function App() {


  return (
    <BrowserRouter>
      <Header/>
      <AppRouter/>
      
    </BrowserRouter>
  )
}

export default App
