
import './App.css';
import {useState, useEffect} from 'react';
import firebase from './firebase';

import ThriftItems from './components/ThriftItems';

function App() {

  // set data from firebase in useState
  const [items, setItems] = useState([]);

  useEffect (() => {
    
    // reference to firebase databas
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      // console.log(response.val());

      const newState = [];

      const data = response.val();

      for (let key in data) {
        newState.push(data[key]);
      }

      setItems(newState);
    })
  }, [])
  // ^^dependency array
  // console.log(items);
  return (
    <div>
      <header>
        <h1>gift shop.</h1>
        <button className="basket">
          <i class="fas fa-gift"></i>
        </button>
      </header>
      <ul className="wrapper">
        {
          items.map((item, index) => {
            console.log(item);
            
            return (
              <ThriftItems 
                title={item.product}
                thriftImg={item.img}
                price={item.price}
                key={index}
              />
            )
            
          })
        }
      </ul>
    
    </div>
  );
}

export default App;
