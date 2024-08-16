import React from 'react'
import './Product.css'

export default function Child({title, price, image, description}) {

    return (
        <div className="card">
            <h3>{title}</h3>
            <span>{price}$</span>
            <span>{description}</span>
        </div>
    )
}
