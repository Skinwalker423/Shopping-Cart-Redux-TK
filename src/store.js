import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/modal/ModalSlice';
import checkoutModalReducer from './features/modal/checkoutModalSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
        checkoutModal: checkoutModalReducer,
    }
})

