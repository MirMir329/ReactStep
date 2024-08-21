import { useState } from 'react'
import styles from "./App.module.css"
import PostList from "./PostList.jsx"
import Header from "./Header.jsx"

function App() {

  const [pupilData, setPupilData] = useState({
    id: "",
    full_name: "",
    age: "",
    subject: "",
    number: "",
    email: "",
  })
  const [teacherData, setTeacherData] = useState({
    id: "",
    full_name: "",
    age: "",
    subject: "",
    number: "",
    email: "",
  });
  const [pupilArr, setPupilArr] = useState([
    {id: 1, full_name: "Egor-1", age: "Age-1", subject: "Subject-1", number: "Number-1", email: "Email-1"},
    {id: 2, full_name: "Egor-2", age: "Age-2", subject: "Subject-2", number: "Number-2", email: "Email-2"},
    {id: 3, full_name: "Egor-3", age: "Age-3", subject: "Subject-3", number: "Number-3", email: "Email-3"},
    {id: 4, full_name: "Egor-4", age: "Age-4", subject: "Subject-4", number: "Number-4", email: "Email-4"}
  ]);
  const [teacherArr, setTeacherArr] = useState([
    {id: 1, full_name: "Egor-1", age: "Age-1", subject: "Subject-1", number: "Number-1", email: "Email-1"},
    {id: 2, full_name: "Egor-2", age: "Age-2", subject: "Subject-2", number: "Number-2", email: "Email-2"},
    {id: 3, full_name: "Egor-3", age: "Age-3", subject: "Subject-3", number: "Number-3", email: "Email-3"},
    {id: 4, full_name: "Egor-4", age: "Age-4", subject: "Subject-4", number: "Number-4", email: "Email-4"}
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
    <div className={styles.main}>
      <Header/>
      
      {/* <div className={styles.first_exercise}>
        <h2>Первое задание</h2>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Название"/>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Описание"/>
        <button onClick={() => createPost()}>Добавить</button>
      </div> */}
      <PostList deletePost={deletePost} postArr={postArr}/>

    </div>
  )
}

export default App
