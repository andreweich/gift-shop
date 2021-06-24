
function Cart({products, onRemove}) {
    return (
        <aside>
            <div className="cartDiv">
            { products.length === 0 
                    ? (<h2>Cart Is Empty <i className="far fa-frown sad"></i></h2>)
                : (
                <>
                    <h2>Your Cart <i className="far fa-grin happy"></i></h2>
                    {products.map((product) => {
                        return (
                            <div key={product.id} className="productContainer">
                                <h3>{product.title}</h3>
                                <h3>{product.price}</h3>
                                <img src={product.thriftImg}alt=""/>
                                <button onClick={() => onRemove(product.id)} className="remove">
                                    <i className="far fa-minus-square"></i>
                                </button>
                            </div>
                        )
                    })}
                </>
                )
            }
            </div>   
        </aside>
    )
};

export default Cart;