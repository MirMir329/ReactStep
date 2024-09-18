import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from "react-redux"
import UsersList from './components/UserList.jsx'
import AddUserBtn from "./components/AddUserBtn.jsx"
import { sortPosts } from "./features/users/UserSlice.jsx"

function App() {

  const {users} = useSelector(state => state.users)

  const [isSorted, setIsSorted] = useState(false);

  const [selectArr, setSelectArr] = useState([]);

  const dispatch = useDispatch()

  const sortUsers = () => {
    let newUsers;
    if (isSorted) {
      newUsers = [...users].sort((a, b) => a.age - b.age)
      setIsSorted(false)
    } else {
      newUsers = [...users].sort((a, b) => b.age - a.age)
      setIsSorted(true)
    }
    dispatch(sortPosts(newUsers))
  }

  const filterArray = () => {
    const usersCopy = [...users]
    const uniqueValues = new Set(selectArr);

    // Добавляем значения ключей второго массива
    usersCopy.map(item => {
      uniqueValues.add(item.address.city);
    });

    // Преобразуем Set обратно в массив
    const resultArray = Array.from(uniqueValues);
    console.log(resultArray);
    setSelectArr(resultArray)
  }



  return (
    <div className="App">
      <h1>Users List</h1>
      <button onClick={sortUsers}>Сортировать по возрасту</button>
      <button onClick={filterArray}>afff</button>
      <UsersList/>
      <AddUserBtn/>
    </div>
  )
}

export default App
