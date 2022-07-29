import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../cart/cartItem";
import { closeCheckoutModal } from "../../features/modal/checkoutModalSlice";
import { useNavigate } from "react-router-dom";



const CheckoutModal = () => {

    const {cartItems} = useSelector((state) => state.cart);
    const {displayCheckoutModal} = useSelector((state) => state.checkoutModal);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout');
        dispatch(closeCheckoutModal());
    }

    const handleOnClose = () => {
        dispatch(closeCheckoutModal());
    }



    const cartList = cartItems.map((item) => {
        if(item.amount < 1) {
            return null;
        };

        return (
            <CartItem key={item.id} {...item} />
        )})

    return(
        <Modal show={displayCheckoutModal} onHide={handleOnClose}>
            <Modal.Header closeButton>
                <Modal.Title>Checkout</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartList}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleOnClose} variant="outline-primary">Continue Shopping</Button>
                <Button onClick={handleCheckout} variant="outline-success">Checkout</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CheckoutModal;