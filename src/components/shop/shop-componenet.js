import './shop-styles.css';
import { Card, Button, Container, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal, toggleAmount } from '../../features/cart/cartSlice';

const Shop = () => {

    const {productsItems, isLoading, cartItems} = useSelector((state) => state.cart);
    const dispatch = useDispatch();


    console.log(productsItems);
    console.log(cartItems);
    const handleAddItem = (id) => {
        console.log('item added');
        dispatch(toggleAmount({id, increase: true}));
    }

    if(isLoading || !productsItems) {
        return (
            <div className='spinner-container'>
                <Spinner animation="border" role="status" variant='danger'>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }


    const productsList = productsItems.map(({title, id, price, img}) => {
        return (
            <Card className='card-item' style={{ width: '18rem' }} key={id}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Card.Subtitle>Price: ${price}</Card.Subtitle>
                    <Button onClick={() => handleAddItem(id)} className='w-100 mt-3' variant="primary">Add Item</Button>
                </Card.Body>
            </Card>
        )
    })

    return (
        <Container className="shop-container">
             {productsList}       
        </Container>
    )
}

export default Shop;