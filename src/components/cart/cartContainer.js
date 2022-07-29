import { useSelector, useDispatch } from "react-redux";
import CartItem from "./cartItem";
import { triggerPopup } from "../../features/modal/ModalSlice";
import { Button, Spinner } from "react-bootstrap";

const CartContainer = () => {


    const {cartItems, total, amount, isLoading} = useSelector((state) => state.cart);
    const dispatch = useDispatch();


    // useEffect(() => {
    //     dispatch(calculateTotal());
    // }, [dispatch, isLoading])

    if(isLoading){
        return (
            <div className="spinner-container">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }

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