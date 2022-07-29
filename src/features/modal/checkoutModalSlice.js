import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    displayCheckoutModal: false,
}

const checkoutModalSlice = createSlice({
    name: 'checkoutModal',
    initialState,
    reducers: {
        showCheckoutModal: (state, action) => {
            state.displayCheckoutModal = true;
        },
        closeCheckoutModal: (state, action) => {
            state.displayCheckoutModal = false;
        }
    }
})

export const {showCheckoutModal, closeCheckoutModal} = checkoutModalSlice.actions;
export default checkoutModalSlice.reducer;

