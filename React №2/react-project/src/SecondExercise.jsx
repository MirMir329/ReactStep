import React, {useState} from 'react'
import styles from "./SecondExercise.module.css"
// фигурные скобки - деструктуризация
export default function SecondExercise({}) {

//    const [form, setForm] = useState({
//     name: "",
//     firstname: "",
//     age: "",
//     education: "",
//    })
   const [visible, setVisible] = useState(false)

   const [name, setForm1] = useState("")
   const [firstname, setForm2] = useState("")
   const [age, setForm3] = useState("")
   const [education, setForm4] = useState("")

   const showPopup = () => {
    setVisible(visible => !visible)
   }

    return (
        <div className={styles.second}>
            <h1>Второе задание</h1>
            <input type="text" onChange={(e) => setForm1(e.target.value)} value={form.name} placeholder="Имя"/>
            <input type="text" onChange={(e) => setForm2(e.target.value)} value={firstname} placeholder="Фамилия"/>
            <input type="text" onChange={(e) => setForm3(e.target.value)} value={age} placeholder="Возраст"/>
            <input type="text" onChange={(e) => setForm4(e.target.value)} value={education} placeholder="Образование"/>
            <button onClick={() => showPopup()}>Показать</button>
            <div className={visible ? styles.visible : styles.unvisible}>
                <div className={styles.main_popup}>
                    <span>Имя: {name}</span> 
                    <span>Фамилия: {firstname}</span> 
                    <span>Возраст: {age}</span> 
                    <span>Образование: {education}</span>
                    <button onClick={() => showPopup()}>Закрыть</button>
                </div>
                    
            </div>
        </div>

    )
}
