import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    carts: [],
    sumCount: 0,
    status: true
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, actions) => {
            state.carts.push(actions.payload)
        },
        addToCart: (state, actions) => {
            state.carts.push(actions.payload)
        }

    },
})

// Action creators are generated for each case reducer function
export const { setCart, addToCart } = cartSlice.actions

export const fetchCarts = () => async (dispatch) => {
    dispatch(setCart(JSON.parse(localStorage.getItem('carts'))));
}

export default cartSlice.reducer