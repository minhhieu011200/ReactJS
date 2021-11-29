const initalState = {
    products: []
}

const ProductReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}

export default ProductReducer