
import { Modal, Button } from "react-bootstrap";
import { closePopup} from "../../features/modal/ModalSlice";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";
import '../../index.css';

const PopUpModal = () => {

    const {show} = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    const handleOnClose = () => {
        dispatch(closePopup());
    }

    const handleClearCart = () => {
        dispatch(clearCart());
        dispatch(closePopup());
    } 


    return (
        <Modal show={show} onHide={handleOnClose} size='lg'>
            <Modal.Header  closeButton>
                <Modal.Title></Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h4>Are you sure you want to clear the cart?</h4>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={handleClearCart} variant="success">Confirm</Button>
                <Button onClick={handleOnClose} variant="danger">Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PopUpModal;