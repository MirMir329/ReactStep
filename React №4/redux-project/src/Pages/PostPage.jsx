import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import styles from "./PostPage.module.css"
import PostComment from "../PostComment.jsx"

export default function PostPage() {

    const [postData, setPostData] = useState("")
    const [postComment, setPostComment] = useState("")
    const [isReady, setIsReady] = useState("")

    const params = useParams();

    useEffect(() => {
        getOnePost()
    }, [])

    const getOnePost = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        const responseComments = await axios.get(`https://jsonplaceholder.typicode.com//posts/${params.postId}/comments`)
        console.log("Пост", response.data);
        console.log("Комментарий", responseComments.data);
        setPostData(response.data)
        setPostComment(responseComments.data)
        setIsReady(true)
    }

    
    return (
        <div className={styles.main_post}>
            <div className={styles.post}>
                <h2>{postData.userId}</h2>
                <h2>{postData.title}</h2>
                <span>{postData.body}</span>
            </div>

            {isReady && postComment.map((comment, index) => <PostComment key={index} comment={comment}/>)}
        </div>
    )
}
