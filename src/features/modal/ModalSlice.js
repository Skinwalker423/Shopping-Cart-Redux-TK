import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    show: false,
    
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        triggerPopup: (state) => {
            state.show = true;
        },
        closePopup: (state) => {
            state.show = false;
        }
    }
})

export const {triggerPopup, closePopup} = modalSlice.actions;
export default modalSlice.reducer;