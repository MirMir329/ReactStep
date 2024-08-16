import React from 'react'
import Product from "./Product.jsx"
import "./App.css"

export default function App() {

  let mainData = [
    {
      id: 0,
      title: "Sofa",
      price: 49.99,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos labore, animi modi numquam ea voluptas hic dolor magni molestiae nobis, deleniti, delectus quia impedit quod magnam laudantium a qui eaque."
    },
    {
      id: 1,
      title: "Chair",
      price: 19.99,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos labore, animi modi numquam ea voluptas hic dolor magni molestiae nobis, deleniti, delectus quia impedit quod magnam laudantium a qui eaque."
    },
    {
      id: 2,
      title: "Fridge",
      price: 79.99,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos labore, animi modi numquam ea voluptas hic dolor magni molestiae nobis, deleniti, delectus quia impedit quod magnam laudantium a qui eaque."
    },
  ];
  const getData = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json()
    // mainData = data.products;
  }
  
  // getData()

  return (
    <div className="main">
      <h1>Магазин</h1>

      {mainData.map(product =>
        <Product key={product.id} title={product.title} price={product.price} description={product.description}/>
      )}

    </div>
  )
}
