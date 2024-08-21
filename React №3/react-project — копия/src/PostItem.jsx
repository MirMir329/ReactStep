import React from 'react'
import styles from "./PostItem.module.css"

export default function PostItem({post, index, deletePost}) {
    return (
        <div className={styles.post}>
            <span>{index}</span>
            <span>{post.title}</span>
            <span>{post.description}</span>
            <button onClick={() => deletePost(post.id)}>Удалить</button>
        </div>
    )
}
