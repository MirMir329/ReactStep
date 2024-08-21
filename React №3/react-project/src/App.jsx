import { useState } from 'react'
import styles from "./App.module.css"
import PostList from "./PostList.jsx"

function App() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("");
  const [postArr, setPostArr] = useState([
    {id: 1, title: "Post-1", description: "Description-1"},
    {id: 2, title: "Post-2", description: "Description-2"},
    {id: 3, title: "Post-3", description: "Description-3"},
    {id: 4, title: "Post-4", description: "Description-4"}
  ]);

  const createPost = () => {
    setPostArr(() => {
      const newPostArr = [...postArr]
      newPostArr.push({id: Date.now(), title: title, description: description})
      return newPostArr
    })
      
  }

  const deletePost = (id) => {
    setPostArr(() => {
      return postArr.filter(item => item.id !== id)
    })
  } 

  return (
    <>
      <div className={styles.first_exercise}>
        <h2>Первое задание</h2>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Название"/>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Описание"/>
        <button onClick={() => createPost()}>Добавить</button>
      </div>
      <PostList deletePost={deletePost} postArr={postArr}/>

    </>
  )
}

export default App
