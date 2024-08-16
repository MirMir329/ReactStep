// import React from 'react'

// export default function App() {
//   const str = "Hello world!"

//   const foo = (value) => {
//     const newValue = value.split("").reverse()
//     // console.log(newValue);
//     return newValue
//   }
//   const nowDate = value => {
//     const date = new Date()
//     const day = date.getDate()
//     // console.log(day);
//     if(day % 2 == 0) {
//       return `${date.getMonth()} (месяц) и ${date.getFullYear()} (год)`
//     } else if (day % 2 == 1) {
//       return `${date.getDay()} (день недели) и ${date.getDate()} (день месяца)`
//     }
//     return day
//   }

//   const bool = true;

//   const num = 5;

//   return (

//     <>
//       {
//         bool &&
//         (<h1>App</h1>)
//       }

//       {num > 10 ?
//         <h1>Переменная num больше 10</h1> :
//         num > 8 ?
//         <h1>Переменная num больше 8</h1> :
//         <h1>Переменная num меньше или равна 8</h1> 
//       }

//       <h1>App</h1>
//       <p>{foo(str)}</p>

//       <p>{nowDate()}</p>
      
//     </>
//   )
// }

import React from 'react'
import Child from "./Child.jsx"
import User from "./User.jsx"

export default function App() {
  const str = "Hello world!";

  const users = [
    {
      id: 0,
      name: "John",
      age: 20
    },
    {
      id: 1,
      name: "Bob",
      age: 35
    },
    {
      id: 2,
      name: "Tom",
      age: 5
    }
  ]

  return (
    <div>
      <h1>App</h1>
      
      <Child str={str} message="какое-то сообщение"/>

      {users.map(user =>
        <User key={user.id} username={user.name} age={user.age}/>
      )}

    </div>
  )
}
