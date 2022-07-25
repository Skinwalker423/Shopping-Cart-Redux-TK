import { ChevronDown, ChevronUp } from "../../icons";
import { removeItem, calculateTotal, calculateAmount, toggleAmount } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({img, title, price, amount, id}) => {

    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeItem(id));
        dispatch(calculateTotal());
        dispatch(calculateAmount());
    }
    
    const handleToggle = (id, bool) => {
        dispatch(toggleAmount({id, increase: bool}));
        dispatch(calculateTotal());
        dispatch(calculateAmount());
    }


    return(
        <article className="cart-item">
            <img src={img} alt={title} />
            <div>
                <div>{title}</div>
                <div className="item-price">{price}</div>
                <button onClick={() => {
                    handleRemove(id);
                }} className="remove-btn">Remove</button>
            </div>
            <div>
                <button onClick={() => {
                    handleToggle(id, true);
                }} className="amount-btn"><ChevronUp /></button>
                <p className="amount">{amount}</p>
                 <button onClick={() => {
                    handleToggle(id, false)
                 }} className="amount-btn"><ChevronDown /></button>
            </div>
        </article>
    )        


}

export default CartItem;


