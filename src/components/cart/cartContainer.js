import { useSelector, useDispatch } from "react-redux";
import CartItem from "./cartItem";
import { calculateTotal } from "../../features/cart/cartSlice";
import { triggerPopup } from "../../features/modal/ModalSlice";
import { useEffect } from "react";
import { Button } from "react-bootstrap";

const CartContainer = () => {


    const {cartItems, total, amount} = useSelector((state) => state.cart);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(calculateTotal());
    }, [cartItems, dispatch])

    const cartList = cartItems.map((item) => {
        if(item.amount < 1) {
            return null;
        };

        return (
            <CartItem key={item.id} {...item} />
        )})
    
    const handleModal = () => {
        dispatch(triggerPopup());
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
                        <h4>Total items {amount} <span>${total}</span></h4>
                    </div>
                    <Button onClick={handleModal} variant='outline-danger' className="mt-5">Clear Cart</Button>
                </footer>
        </section>
    )
        

}

export default CartContainer;