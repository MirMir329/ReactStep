import React from 'react'
import styles from "./Header.module.css"
import {Link} from "react-router-dom"
import {useContext} from "react"
import {AuthContext} from "./context/context.js"

export default function Header() {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    function logOut() {
        setIsAuth(false);
        localStorage.clear()
    }

    return (
        <div className={styles.header}>
            <Link to="/">Главная</Link>
            <Link to="/posts">Посты</Link>
            <Link to="/login">Вход</Link>
            {isAuth && <button onClick={logOut}>Выход</button>}
            
        </div>
    )
}
