import { createSlice } from '@reduxjs/toolkit'
import ProductAPI from "../api/ProductAPI";

const initialState = {
    products: []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, actions) => {
            state.products = actions.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setProducts } = productSlice.actions

export const fetchProducts = () => async (dispatch) => {
    const response = await ProductAPI.getAPI()
    dispatch(setProducts(response));
}

export default productSlice.reducer