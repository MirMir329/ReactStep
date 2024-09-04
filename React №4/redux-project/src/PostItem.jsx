import React from 'react'
import styles from "./PostItem.module.css"
import DeleteBtn from "./DeleteBtn.jsx"
import { TransitionGroup } from 'react-transition-group'
import { useNavigate } from 'react-router-dom'

export default function PostItem({post, index, deletePost}) {

    const navigate = useNavigate()
    const openPost = (post_id) => {
        navigate(`/posts/${post_id}`)
    }

    return (
        <div className={styles.post}>
            <span>{index}</span>
            <span>{post.title}</span>
            <span>{post.description}</span>
            <DeleteBtn post={post} deletePost={deletePost}>Удалить</DeleteBtn>
            <button onClick={() => openPost(post.id)}>Открыть</button>
        </div>
    )
}
