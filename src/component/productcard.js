import React from 'react'
import './productcard.css'

export default function Productcard(props) {
    const {img,name,price} = props.element
  return (
    <div className="productcard">
            <img src={img} alt=""/>
        <h3>{name}</h3>
        <p>&#8377;{price}</p>
    </div>
  )
}
