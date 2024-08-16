import React, {useState} from 'react'
import styles from "./FirstExercise.module.css"
// фигурные скобки - деструктуризация
export default function FirstExercise({}) {

    const [color, setMode] = useState(false)

    const changeColor = () => {
        setMode(color => !color)
    }

    return (
        <div onClick={() => changeColor()} className={color ? styles.white_mode : styles.dark_mode}>
            <h1>Первое задание</h1>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet deserunt quia recusandae. Iusto laboriosam, tempore inventore sapiente doloremque ipsa quia nemo hic fugit itaque! Suscipit, corporis. Molestiae aspernatur quis optio.
            Doloremque quaerat amet possimus facilis consequuntur nulla vitae, cumque, dolorem soluta dolor incidunt ut recusandae. Similique voluptate facere perspiciatis vel mollitia, ab laboriosam tempora, nemo nobis impedit hic consequuntur necessitatibus.
            Temporibus, veniam pariatur sunt, omnis rem, deserunt nihil odit aspernatur adipisci non quidem excepturi consequuntur recusandae magnam architecto dolorum illo quod reprehenderit consectetur facere quo. Sequi maiores illo sed perferendis!
            Nisi enim est labore illum quis laboriosam voluptatibus vel quam autem deleniti eveniet aspernatur, sit, consequatur iste id voluptates eum nemo dolores incidunt atque ipsa saepe. Officia enim itaque autem.
            Odio doloribus, facilis dignissimos similique debitis commodi necessitatibus odit officia animi mollitia exercitationem aut eius tempore rerum repellat illum natus autem temporibus vero. Minima porro, tenetur labore error alias excepturi.</span>

        </div>
    )
}
