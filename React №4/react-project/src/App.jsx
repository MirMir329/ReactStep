import Header from "./Header.jsx"
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import "./App.module.css"
import {useState, useEffect} from "react"
import AppRouter from "./AppRouter.jsx"
import { AuthContext } from "./context/context.js";

function App() {

  const [isAuth,setIsAuth] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("auth") === "true") {
      setIsAuth(true);
    }
  }, [])

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <BrowserRouter>
        <Header/>
        <AppRouter/>
        
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
