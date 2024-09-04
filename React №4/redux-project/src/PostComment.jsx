import React from 'react'
import styles from "./PostComment.module.css"

export default function PostComment({comment}) {
    return (
        <div className={styles.comment}>
            <h2>{comment.id}</h2>
            <span>{comment.name}</span>
            <span>{comment.email}</span>
            <span>{comment.body}</span>
        </div>
    )
}
