
import './App.css';
import firebase from './firebase';
import Shop from './components/Shop';
import Cart from './components/Cart'
import { useState, useEffect } from 'react';

function App() {

  // set data from firebase in useState
  const [items, setItems] = useState([]);
  // const [giftCart, setGiftCart] = useState({});
  // const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  // const [cartCount, setCartCount] = useState(0);
  // const [cart, setCart] = useState([]);

  useEffect (() => {
    
    // reference to firebase databas
    const dbItems = firebase.database().ref();
    dbItems.on('value', (response) => {
      const itemState = [];
      const itemData = response.val();
      for (let key in itemData) {
        itemState.push(itemData[key]);
      }

      setItems(itemState);
      setIsLoading(false);
    })
  }, [])

  // Add to cart function... 
  // const newGiftCart = {...giftCart};

  // const handleAddToCart = (purchase) => {
  //   if (newGiftCart[purchase.id]) {
  //     const cartItem = newGiftCart[purchase.id];
  //     cartItem.quantity = cartItem.quantity + 1;
  //     cartItem.totalQuanity = cartItem.totalQuanity + purchase.product.price
  //   } else {
  //     newGiftCart[purchase.id] = {
  //       quantity: 1, 
  //       quantityTotal: purchase.product.price
  //     }
  //   }
  // }

  

  // setGiftCart(newGiftCart)
  
  // setCartCount(cartCount + 1)
  
  // const popOutCart = () => {
  //   document.getElementById('thriftCart').classList.remove('thriftCart');
  //   document.getElementById('thriftCart').classList.add('openCart');
  // }
  
  // const closeCart = () => {
  //   document.getElementById('thriftCart').classList.remove('openCart');
  //   document.getElementById('thriftCart').classList.add('thriftCart');
  // }
  
  return (
    <div className="App">

      {/* Header */}
      <header className="wrapper">
        <h1>gift shop.</h1>
        {/* add onClick to button to display pop out menu */}
        <button className="basket">
          <i className="fas fa-gift"></i>
        </button>
      </header>

      {/* Main */}
      <main>
        <section className="wrapper">

          {/* Map through products and add props */}
          <ul>
            {
              isLoading ? <h2>one moment please...</h2> : items.map((item) => {
                console.log(item);
                
                return (
                  <Shop 
                  key={item.id}
                  title={item.product}
                  thriftImg={item.img}
                  price={item.price}
                  
                  />
                  )
                })
            }
          </ul>
        </section>

        {/* Cart */}

        {/* <section className="thriftCart wrapper" id="thriftCart">
          <div onClick = {closeCart}>
            <i className="far fa-times-circle"></i>
          </div>
          <table>
            <tr>
              <th>Gift</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          

            {/* Map through cart to display items */}

            {/* {
              Object.values(giftCart).map((item) => {
            
                const { quantity, inventoryItem, total} = item;
                return (
                  <Cart
                  giftName={inventoryItem.item.product}
                  quantity={quantity}
                  purchasePrice={total}
                  />
                )
              })
            } */}

          {/* </table>
        </section> */}

      </main>

      <footer className="footer wrapper">
        <a className="juno" href="https://junocollege.com/">Copyright <span>&#169;</span> 2021 Juno College</a>
      </footer>
    </div>
  );
}

export default App;
