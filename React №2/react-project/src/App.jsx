// // import React from 'react'
// // import Child from "./Child.jsx"

// // export default function App() {

// //   const str = "Hello wolrd!";
// //   const bool = true;

// //   const foo = (str) => {
// //     console.log(str);
// //   }

// //   return (
// //     <div>
// //       {bool && <Child str={str}/>}

// //       <button onClick={() => foo("log")}>Click</button>

// //       <input type="text" onChange={(event) => console.log(event.target.value)}/>
// //     </div>
// //   )
// // }






// import React, { useState } from 'react'

// export default function App() {

//   // let counter = 0;
//   const [counter, setCounter] = useState(0);
  
//   const [str, setStr] = useState("sdfsdf");

//   // const increment = () => {
//   //   setCounter(counter + 1);
//   //   console.log(counter);
//   // }

//   // const decrement = () => {
//   //   setCounter(counter - 1);
//   //   console.log(counter);
//   // }

//   return (
//     <div>
//       {counter}
//       <button onClick={() => setCounter(counter + 1)}>+</button>
//       <button onClick={() => setCounter(counter - 1)}>-</button>

//       <br/>
      
//       {str}
//       <input type="text" value={str} onChange={(e) => setStr(e.target.value)}/>
//     </div>
//   )
// }



import React from 'react'
import FirstExercise from "./FirstExercise.jsx"
import SecondExercise from "./SecondExercise.jsx"
import ThirdExercise from "./ThirdExercise.jsx"
import FourthExercise from "./FourthExercise.jsx"

export default function App() {
  return (
    <div>
      <FirstExercise/>
      <SecondExercise/>
      <ThirdExercise/>
      <FourthExercise/>
    </div>
  )
}
