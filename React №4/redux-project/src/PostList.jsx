import React from 'react'
import styles from "./PostList.module.css"
import PostItem from "./PostItem.jsx"
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import "./index.css"

export default function PostList({postArr, deletePost}) {
    return (
        <TransitionGroup className={styles.postList}>
            {postArr.map((elem, index) => (
                <CSSTransition key={elem.id} timeout={500} classNames='card'>
                    <PostItem deletePost={deletePost}  index={index} post={elem}/>
                </CSSTransition>
            )) }
        </TransitionGroup>

    )
}
