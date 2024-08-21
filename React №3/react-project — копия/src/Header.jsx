import React from 'react'
import styles from "./Header.module.css"

export default function Header() {
    return (
        <div className={styles.header}>
            <a href="#">Главная</a>
            <a href="#">Ученики</a>
            <a href="#">Преподаватели</a>
            <a href="#">О нас</a>
        </div>
    )
}
