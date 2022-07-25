import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navabar/navbar-component";
import CartContainer from "./components/cart/cartContainer";
import Shop from "./components/shop/shop-componenet";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotal, calculateAmount } from "./features/cart/cartSlice";




function App() {

  const {amount } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateAmount());
        dispatch(calculateTotal());
    }, [amount, dispatch])


  return (
    <Routes>
      <Route exact path="/" element={<NavBar />}>
          <Route index element={<Shop />} />
          <Route path="checkout" element={<CartContainer />} />
      </Route>
    </Routes>
  )
}
export default App;
