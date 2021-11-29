import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productReducer'
import cartReducer from './cartReducer'

// const reducer = {
//     product: productReducer,
//     visibility: visibilityReducer,
// }

const reducer = {
    product: productReducer,
    cart: cartReducer
}

export default configureStore({
    reducer
})