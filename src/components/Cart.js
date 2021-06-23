
function Cart(props) {
    return (
        <tr>
            <td>{props.giftName}</td>
            <td>{props.quantity}</td>
            <td id="totalPurchases">{props.purchasePrice}</td>
        </tr>
    )
};

export default Cart;