
function Shop({title, thriftImg, price, onAdd, id}) {
    
    return (
        <li className="shopList">
            <div className="overlay">
                <img src={thriftImg} alt={title} />
            </div>
            <h2>{title}</h2>
            <div className="priceButton">
                <h3>{price}</h3>
                <button onClick={() => onAdd({title, price, thriftImg, id})} className="addToCart"> Add To Cart </button>
            </div>
        </li>
    )
}

export default Shop;