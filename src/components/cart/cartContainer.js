import { useSelector } from "react-redux";

const CartContainer = () => {

    const {cartItems, total, amount} = useSelector((state) => state.cart);

    const cartList = cartItems.map(({id, title, img, price}) => {
        return (
            <div key={id}>
                <div>
                    <img style={{width: '100px'}} src={img} />
                </div>
                <div>
                    <div>{title}</div>
                    <div>{price}</div>
                </div>
        </div>
        )})


    return(
        <section>
                <header>
                    <h2>Your Bag</h2>
                    {amount < 1 ? <h4 className="empty-cart">is currently empty</h4> : cartList}
                </header>
        </section>
    )
        

}

export default CartContainer;