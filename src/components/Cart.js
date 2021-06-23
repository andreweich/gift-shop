
function Cart({products, close}) {
    
    return (
        <aside>
            <div className="cartDiv">

            {/* <div onClick={close}><i className="fas fa-times"></i></div> */}
            { products.length === 0 
                    ? (<h2>Cart Is Empty <i className="fas fa-gift"></i></h2>)
                : (
                <>
                        <h2>Your Cart <i className="fas fa-gift"></i></h2>
                        {products.map((product) => {
                            // console.log(product);
                            return (
                                <div className="productContainer" key={product.id}>
                                    <h3>{product.product}</h3>
                                    <h3>{product.qty} {product.price}</h3>
                                </div>
                            )
                        })}
                </>
                )
            }
            </div>

            
            {/* // {
            //     cartItems.map ((item) => {
            //         <div>
            //             <h3>{title}</h3>
            //             <button onClick={() => onRemove(item)} className="remove">-</button>
            //             <h4>{item.qty} x {price.toFixed(2)}</h4>
            //         </div>
            //     }) */}
            
            
        </aside>
    )
};

export default Cart;