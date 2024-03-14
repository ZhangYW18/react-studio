// create a component that displays a single bakery item
import React, { Component } from 'react'
import './BakeryItem.css'

export default class List extends Component {

  render() {
    const {name, description, image, price, addToCart} = this.props
    return (
      <div className="card">
        <img src={image} alt={name + ": " + description}/>
        <div>
          <h3>{name}</h3>
          <p className="desc">{description}</p>
          <div className="buy">
            <p>{price}</p>
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    )
  }
}