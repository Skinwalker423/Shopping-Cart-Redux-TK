
const CartItem = ({img, title, price}) => {


    return(
        <div>
            <div>
                <img style={{width: '100px'}} src={img} alt={title} />
            </div>
            <div>
                <div>{title}</div>
                <div>{price}</div>
            </div>
        </div>
    )        


}

export default CartItem;


