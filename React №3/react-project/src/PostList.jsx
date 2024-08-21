import React from 'react'
import styles from "./PostList.module.css"
import PostItem from "./PostItem.jsx"

export default function PostList({postArr, deletePost}) {
    return (
        <div className={styles.posts}>
            {postArr.map((elem, index) => <PostItem deletePost={deletePost} key={elem.id} index={index} post={elem}/>) }
        </div>
    )
}
