export const addCart = (data) => {
    return {
        type: 'ADD_CART',
        data
    }
}

export const deleteCart = (data) => {
    return {
        type: 'DELETE_CART',
        data
    }
}