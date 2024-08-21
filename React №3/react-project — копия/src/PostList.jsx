import React, { useState } from 'react'
import styles from "./PostList.module.css"
import PostItem from "./PostItem.jsx"

export default function PostList({postArr, deletePost}) {

    const [boolean, setBoolean] = useState(false);

    const changeBoolean = () => {
        setBoolean(boolean => !boolean)
    }

    return (
        <div className={styles.posts}>
            <div>
                {boolean == false
                 ? <button onClick={() => changeBoolean()}>Студенты</button> 
                 : <button onClick={() => changeBoolean()}>Ученики</button>
                }
                
            </div>
                
            
            {/* {postArr.map((elem, index) => <PostItem deletePost={deletePost} key={elem.id} index={index} post={elem}/>) } */}
        </div>
    )
}
