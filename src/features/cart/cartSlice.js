import { createSlice} from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
    isLoading: false,
    amount: 0,
    total: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
})

export default cartSlice.reducer;
