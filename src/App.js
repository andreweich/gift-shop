
import './App.css';
import firebase from './firebase';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { useState, useEffect } from 'react';

function App() {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect (() => {
    
    // reference to firebase database
    const dbItems = firebase.database().ref();
    dbItems.on('value', (response) => {
      const productState = [];
      const itemData = response.val();
      for (let key in itemData) {
        productState.push(itemData[key]);
      }

      setProducts(productState);
      setIsLoading(false);
    })
  }, [])


  // Add to cart    
  const onAdd = (cartItem) => {
    setCartItems([...cartItems, cartItem]);
  }

  // Remove from cart
  const onRemove = (id) => {
    const newItems = cartItems.filter((cartItem) => cartItem.id !== id)
    setCartItems(newItems);
  }

  return (
    <div className="App">

      {/* Header */}
      <header className="wrapper">
        <h1>gift shop.</h1>
        {/* add onClick={popOutCart} to button to display pop out menu */}
        <button className="basket">
          <span className="counter">{cartItems.length}</span>
          <i className="fas fa-gift"></i>
        </button>
      </header>

      {/* Main */}
      <main>
        <section className="wrapper">

          {/* Map through products and add props */}
          <ul>
            {
              isLoading ? <h2>one moment please...</h2> : products.map((product) => {
                return (
                  <Shop 
                    id={product.id}
                    title={product.product}
                    thriftImg={product.img}
                    price={product.price}
                    onAdd={onAdd}
                    key={product.id}
                  />
                )
                })
            }
          </ul>
        </section>

        {/* Cart */}

        <section className={"thriftCart wrapper"} id={"thriftCart"}>
            <Cart 
              products={cartItems}
              onRemove={onRemove}
            />
        </section>
      </main>

      <footer className="footer wrapper">
        <a className="juno" href="https://junocollege.com/">Copyright <span>&#169;</span> 2021 Juno College</a>
      </footer>
    </div>
  );
}

export default App;
