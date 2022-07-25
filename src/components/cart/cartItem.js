import { ChevronDown, ChevronUp } from "../../icons";
import { incrementAmount, decrementAmount, removeItem, calculateTotal, calculateAmount } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({img, title, price, amount, id}) => {

    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeItem(id));
        dispatch(calculateTotal());
        dispatch(calculateAmount());
    }
    
    const handleIncrement = (id) => {
        dispatch(incrementAmount(id));
        dispatch(calculateTotal());
        dispatch(calculateAmount());
    }

    const handleDecrement = () => {
        dispatch(decrementAmount(id));
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
                    handleIncrement(id);
                }} className="amount-btn"><ChevronUp /></button>
                <p className="amount">{amount}</p>
                 <button onClick={handleDecrement} className="amount-btn"><ChevronDown /></button>
            </div>
        </article>
    )        


}

export default CartItem;


