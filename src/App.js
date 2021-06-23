
import './App.css';
import firebase from './firebase';
import Shop from './components/Shop';
import Cart from './components/Cart'
import { useState, useEffect } from 'react';

function App() {

  // set data from firebase in useState
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [cartCount, setCartCount] = useState(0);
  

  useEffect (() => {
    
    // reference to firebase databas
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


  // Add to cart function... 

  const onAdd = (cartItem) => {
    console.log(cartItem);
    const copyOfProducts = [...products];
    console.log(...products);
    
    const filterProducts = copyOfProducts.filter((product => {
      console.log(product);
      return cartItem;
    }));
    
    
    setCartItems(filterProducts);
    console.log(filterProducts);
    // if (exist) {
    //   setCartItems(
    //     cartItems.map(item => 
    //       item.id === product.id ? {...isExist, qty: isExist.qty + 1} : item
    //     )
    //   );
    // } else {
    //   setCartItems([...cartItems, {...product, qty: 1 }]);
  }

  // copyOfProducts.find(item => item.id === product.id)
  
  const popOutCart = () => {
    document.getElementById('thriftCart').classList.remove('thriftCart');
    document.getElementById('thriftCart').classList.add('openCart');
  }
  
  const closeCart = () => {
    document.getElementById('thriftCart').classList.remove('openCart');
    document.getElementById('thriftCart').classList.add('thriftCart');
  }
  
  return (
    <div className="App">

      {/* Header */}
      <header className="wrapper">
        <h1>gift shop.</h1>
        {/* add onClick to button to display pop out menu */}
        <button onClick={popOutCart} className="basket">
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
                // console.log(product);
                
                return (
                  <Shop 
                    key={product.id}
                    title={product.product}
                    thriftImg={product.img}
                    price={product.price}
                    onAdd={onAdd}
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
              close={closeCart}
            />
                {/* onAdd={onAdd} */}
          
        </section>
        

      </main>

      <footer className="footer wrapper">
        <a className="juno" href="https://junocollege.com/">Copyright <span>&#169;</span> 2021 Juno College</a>
      </footer>
    </div>
  );
}

export default App;
