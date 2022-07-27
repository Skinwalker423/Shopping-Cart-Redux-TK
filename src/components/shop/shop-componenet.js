import './shop-styles.css';
import { Card, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { calculateTotal, toggleAmount } from '../../features/cart/cartSlice';
import cartItems from '../../cartItems';

const Shop = () => {

    const dispatch = useDispatch();


    const handleAddItem = (id) => {
        console.log('item added');
        dispatch(toggleAmount({id, increase: true}));
        dispatch(calculateTotal());
    }

    const productsList = cartItems.map(({title, id, price, img}) => {
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