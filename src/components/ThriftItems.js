function ThriftItems({title, thriftImg, price}) {

    return (
        <li className="thriftList">
            <h2>{title}</h2>
            <img src={thriftImg} alt={title} />
            <h3>{price}</h3>
            <button className="cart">Add To Cart</button>
        </li>
    )
}

export default ThriftItems;