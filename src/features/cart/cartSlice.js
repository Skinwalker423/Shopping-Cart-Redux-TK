import { createSlice} from "@reduxjs/toolkit";
import cartItems from "../../cartItems";


const initialState = {
    cartItems: cartItems,
    isLoading: false,
    amount: 5,
    total: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const cartId = action.payload;
            state.cartItems = state.cartItems.filter((item) => cartId !== item.id);
        },
        incrementAmount: (state, {payload}) => {
            const cartItem = state.cartItems.find((item) => item.id === payload);
            cartItem.amount = cartItem.amount + 1;
        },
        decrementAmount: (state, {payload}) => {
            const cartItem = state.cartItems.find((item) => item.id === payload);
            cartItem.amount = cartItem.amount - 1;
        },
    }
})

export const {clearCart, incrementAmount, decrementAmount, removeItem} = cartSlice.actions;

export default cartSlice.reducer;
