
function Shop({title, thriftImg, price}) {
    
    return (
        
        <li className="shopList">
            <div className="overlay">
                <img src={thriftImg} alt={title} />
            </div>
            <h2>{title}</h2>
            <div className="priceButton">
                <h3>{price}</h3>
                <button type="submit" value="add" className="addToCart"> Add To Cart </button>
            </div>
        </li>
            // <div>{cartItems}</div>
        
    )
}

export default Shop;