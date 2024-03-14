import "./App.css";
import { useState } from "react";
import BakeryItem from './components/BakeryItem'
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, setCart] = useState([])
  const [price, setPrice] = useState(0)

  const addToCart = (bakeryName, bakeryPrice)=> {
    console.log('here')
    let found = false;
    let newCart = cart.map(item => {
      if (item.name === bakeryName) {
        found = true
        return { ...item, count: item.count+1 }; // Update the price of "Cake" to 15
      }
      return item;
    });
    if (!found) {
      newCart = [...cart, {
        name: bakeryName,
        count: 1
      }]
    }
    setCart(newCart)
    setPrice(bakeryPrice + price)
  }

  return (
    <div className="App">
      <div className="main">
        <h1>My Bakery</h1> {/* personalize your bakery (if you want) */}

        <div className="items">
          {bakeryData.map((item, index) => ( // map bakeryData to BakeryItem components
            <BakeryItem addToCart={() => addToCart(item.name, item.price)} {...item} >Bakery Item {index}</BakeryItem> // replace with BakeryItem component
          ))}
        </div>
      </div>

      <div className="cart">
        <h2>Cart</h2>
        { cart.length === 0 ? <h4>Nothing added</h4> : <div/>}
      <ul>
          {
            cart.map(item => (
            <li key={item.name}>{item.count + " X " + item.name}</li>
            ))
          }
      </ul>
        { cart.length === 0 ? <a/> : <h3>Total Price: ${price.toFixed(2)}</h3>}
      </div>
    </div>
  );
}

export default App;
