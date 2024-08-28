import { useState, useMemo, useEffect } from 'react'
import styles from "./App.module.css"
import PostList from "./PostList.jsx"
import CreateBtn from "./CreateBtn.jsx"
import MySelect from "./MySelect.jsx"
import {usePosts} from "./hook/usePosts.js"
import axios from 'axios'
import "./index.css"
import Myloader from "./UI/MyLoader.jsx"

const url = "https://jsonplaceholder.typicode.com/posts"

function App() {

  const [search, setSearch] = useState("")

  const [selectedSort, setSelectedSort] = useState("")

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("");
  const [postArr, setPostArr] = useState([
    // {id: 1, title: "Post-4", description: "Description-1"},
    // {id: 2, title: "Post-1", description: "Description-4"},
    // {id: 3, title: "Post-3", description: "Description-2"},
    // {id: 4, title: "Post-2", description: "Description-3"},
  ]);

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
    try {
      setLoading(true)
      setTimeout( async () => {
        const response = await axios.get(url)
        console.log(response);
        setPostArr(response.data);
        setLoading(false);
      }, 2000)
      
    } catch (error) {
      console.error("Error", error)
    }
  }

  const filteredPosts = usePosts(postArr, selectedSort, search)

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

  function sortPost(sort) {
    setSelectedSort(sort)
    
  }


  const optionList = [{text: "По названию", value: "title"}, {text: "По описанию", value: "description" }, ]

  return (
    <div className={styles.main}>
      <div className={styles.first_exercise}>
        <h2>Первое задание</h2>
        <button onClick={getPosts}>Посты</button>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Название"/>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Описание"/>
        <CreateBtn createPost={createPost}>Добавить</CreateBtn>
        <MySelect options={optionList} defaultValue="Сортировка" onChange={sortPost}/>
        <input value={search} onInput={event => setSearch(event.target.value)} type="text" placeholder="Поиск"/>
      </div>
      {loading ? (
       <div className="loader-block">
         <Myloader/>
       </div>
      ) : (
       <PostList deletePost={deletePost} postArr={filteredPosts}/>
      )
      }
     

    </div>
  )
}

export default App
