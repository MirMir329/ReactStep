import React from 'react'
import styles from "./PostItem.module.css"
import DeleteBtn from "./DeleteBtn.jsx"
import { TransitionGroup } from 'react-transition-group'

export default function PostItem({post, index, deletePost}) {
    return (
        <div className={styles.post}>
            <span>{index}</span>
            <span>{post.title}</span>
            <span>{post.description}</span>
            <DeleteBtn post={post} deletePost={deletePost}>Удалить</DeleteBtn>
        </div>
    )
}
