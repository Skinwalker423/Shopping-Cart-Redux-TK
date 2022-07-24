import { useSelector, useDispatch } from "react-redux";
import CartItem from "./cartItem";
import { clearCart } from "../../features/cart/cartSlice";

const CartContainer = () => {

    const {cartItems, total, amount} = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const cartList = cartItems.map((item) => {
        return (
            <CartItem key={item.id} {...item} />
        )})

    const handleClearCart = () => {
        return dispatch(clearCart());
    }   

    return(
        <section className="cart">
                <header>
                    <h2>Your Bag</h2>
                    {amount < 1 ? <h4 className="empty-cart">is currently empty</h4> : cartList}
                </header>
                <footer>
                    <hr />
                    <div className="cart-total">
                        <h4>Total <span>${total}</span></h4>
                    </div>
                    <button onClick={handleClearCart} className="btn clear-btn">Clear Cart</button>
                </footer>
        </section>
    )
        

}

export default CartContainer;