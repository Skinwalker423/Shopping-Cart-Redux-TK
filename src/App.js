import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navabar/navbar-component";
import CartContainer from "./components/cart/cartContainer";
import Shop from "./components/shop/shop-componenet";



function App() {


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
