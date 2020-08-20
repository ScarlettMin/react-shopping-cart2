import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
    name: 'x     ',
    initialState: {
        quantity: 0,
        items: []
    },
    reducers: {
        pushProductToCart: (state, action) => {
            state.items.push({
                id: action.payload.id,
                quantity: 1
            })
        }
    }
})
export const {pushProductToCart} = cartSlice.actions;

export const addProductToCart = (item) => dispatch => {
    dispatch(pushProductToCart(item))
}

export default cartSlice.reducer;