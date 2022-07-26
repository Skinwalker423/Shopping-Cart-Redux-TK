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
            return initialState;
        },
        removeItem: (state, action) => {
            const cartId = action.payload;
            state.cartItems = state.cartItems.filter((item) => cartId !== item.id);
        },

        toggleAmount: (state, {payload}) => {
            const {id, increase} = payload;
            const cartItem = state.cartItems.find((item) => item.id === id);
            increase ? cartItem.amount = cartItem.amount + 1 : cartItem.amount = cartItem.amount - 1
        },
        calculateTotal: (state) => {
            let total = 0;
            let amount = 0;

            state.cartItems.map((item) => {  
                total += (item.amount * item.price);
                amount += item.amount;
                return null;
            });    

            state.total = total.toFixed(2);
            state.amount = amount;    
        }
    }
})

export const {clearCart, removeItem, calculateTotal, toggleAmount} = cartSlice.actions;

export default cartSlice.reducer;
