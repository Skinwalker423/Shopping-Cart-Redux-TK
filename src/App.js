import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navabar/navbar-component";
import CartContainer from "./components/cart/cartContainer";
import Shop from "./components/shop/shop-componenet";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotal, getCartItems } from "./features/cart/cartSlice";
import PopUpModal from "./components/modal/modal-component";
import { Container } from "react-bootstrap";
import CheckoutModal from "./components/modal/checkout-modal";





function App() {

  const {cartItems, isLoading} = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(getCartItems('cart/getCartItems'));
    }, [dispatch])
    
    useEffect(() => {
      if(cartItems.length && !isLoading){
        dispatch(calculateTotal());
      }
    }, [cartItems, dispatch, isLoading])



  return (
    <Container>
      <CheckoutModal />
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
