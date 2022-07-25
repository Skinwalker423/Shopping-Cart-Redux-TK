import { createSlice} from "@reduxjs/toolkit";
import cartItems from "../../cartItems";


const initialState = {
    cartItems: cartItems,
    isLoading: false,
    amount: 0,
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
        calculateAmount: (state) => {
            state.amount = state.cartItems.reduce((total, currentItem) => 
            total + currentItem.amount, 0);
        },
        calculateTotal: (state) => {
            const cartTotal = state.cartItems.reduce((acc, x) =>
               acc + (x.amount * x.price), 0
            );    
            state.total = Math.round(cartTotal * 100) / 100;
        },
    }
})

export const {clearCart, incrementAmount, decrementAmount, removeItem, calculateTotal, calculateAmount} = cartSlice.actions;

export default cartSlice.reducer;
