
function Shop({title, thriftImg, price, onAdd}) {
    
    return (
        
        <li className="shopList">
            <div className="overlay">
                <img src={thriftImg} alt={title} />
            </div>
            <h2>{title}</h2>
            <div className="priceButton">
                <h3>{price}</h3>
                <button onClick={() => onAdd(title)} className="addToCart"> Add To Cart </button>
            </div>
        </li>
            // <div>{cartItems}</div>
        
    )
}

export default Shop;