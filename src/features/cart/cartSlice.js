import { createSlice} from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const url = 'https://course-api.com/react-useReducer-cart-project'


const initialState = {
    cartItems: [],
    productsItems: [],
    isLoading: false,
    amount: 0,
    total: 0,
}


export const getCartItems = createAsyncThunk('cart/getCartItems', async(name, thunkApi) => {
        try{
            console.log(thunkApi);
            const res = await axios(url);
            return res.data;
        }catch(e){
            return thunkApi.rejectWithValue(e.message);
        }
    }
)
// export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
//         return fetch(url)
//             .then((res) => {
//                 console.log('data fetched');
//                 return res.json();
//             })
//             .catch((error) => console.log('something went wrong', error.response.data));
//     }
// )


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            const newCartList = state.cartItems.map((item) => {
                return {...item, amount: 0}
            })
            console.log(newCartList);
            state.cartItems = newCartList;
            state.amount = 0;
            state.total = 0;
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
    },
    extraReducers: {
        [getCartItems.pending]: (state, action) => {
            state.isLoading = true;
            console.log('loading')
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload;
            state.productsItems = action.payload;
            console.log('success');
        },
        [getCartItems.rejected]: (state, action) => {
            state.isLoading = false;
            console.log(action.payload);
        },

    }
})

export const {clearCart, removeItem, calculateTotal, toggleAmount} = cartSlice.actions;

export default cartSlice.reducer;
