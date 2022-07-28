import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navabar/navbar-component";
import CartContainer from "./components/cart/cartContainer";
import Shop from "./components/shop/shop-componenet";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotal, getCartItems } from "./features/cart/cartSlice";
import PopUpModal from "./components/modal/modal-component";
import { Container } from "react-bootstrap";





function App() {

  const {cartItems} = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    
    useEffect(() => {
      dispatch(getCartItems('cart/getCartItems'));
    }, [])
    
    useEffect(() => {
        dispatch(calculateTotal());
    }, [cartItems, dispatch])



  return (
    <Container>
    <PopUpModal />
      <Routes>
        <Route exact path="/" element={<NavBar />}>
            <Route index element={<Shop />} />
            <Route path="checkout" element={<CartContainer />} />
        </Route>
      </Routes>
    </Container>
  )
}
export default App;
