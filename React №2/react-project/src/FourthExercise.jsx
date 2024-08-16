import React, { useState } from 'react'
import styles from "./FourthExercise.module.css"

export default function FourthExercise() {

    const [counter, setSrc] = useState(0)

    const gallery = [
        "https://img.freepik.com/free-photo/forest-landscape_71767-127.jpg",
        "https://img.freepik.com/premium-vector/landscape-with-lake-sunset-background_931646-9.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm5flQBND-YpqN38l5FMm77jZqgzyguuOsgA&s",

    ]

    const previousImg = () => {
        setSrc(counter - 1)
    }

    const nextImg = () => {
        setSrc(counter + 1)
    }

    return (
        <div className={styles.fourth}>
            <button onClick={() => previousImg()}>Лево</button>
            <img src={gallery[counter]} alt="#"/>
            <button onClick={() => nextImg()}>Право</button>
        </div>
    )
}
