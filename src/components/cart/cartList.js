import { useSelector } from "react-redux";
import CartContainer from "./cartContainer";

const CartList = () => {

    const {cartItems} = useSelector((state) => state.cart);

    const CartList = cartItems.map(({id, title, img, price}) => {
        return (
            <CartContainer
                title={title}
                key={id}
                img={img}
                price={price}
            />
            )
            })

    return(
        <div>
            {CartList}
        </div>
    )        


}

export default CartList;


