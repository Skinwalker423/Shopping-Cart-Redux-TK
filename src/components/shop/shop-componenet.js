import './shop-styles.css';
import { useSelector } from 'react-redux';
import { Card, Button, Container } from 'react-bootstrap';

const Shop = () => {

    const {cartItems} = useSelector((state) => state.cart);

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
                    <Card.Footer>Price: ${price}</Card.Footer>
                    <Button variant="primary">Add Item</Button>
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