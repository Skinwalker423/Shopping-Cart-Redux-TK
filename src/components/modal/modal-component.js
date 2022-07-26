
import { Modal, Button } from "react-bootstrap";
import { closePopup} from "../../features/modal/ModalSlice";
import { useSelector, useDispatch } from "react-redux";

const PopUpModal = () => {

    const {show} = useSelector((state) => state.modal);
    const dispatch = useDispatch();

    const handleOnClose = () => {
        dispatch(closePopup());
    }


    return (
        <Modal show={show} onHide={handleOnClose}>
            <Modal.Header  closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PopUpModal;