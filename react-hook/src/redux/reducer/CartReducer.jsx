const initalState = {
    userID: 'fd',
    cartItem: [],
    sumCount: 0
}

const CartReducer = (state = initalState, action) => {

    switch (action.type) {
        case 'ADD_CART':
            console.log("idUser: ", action.data)

            const stateLogin = [...state.idUser]
            stateLogin.idUser = action.data
            return stateLogin

        case 'DELETE_CART':
            console.log("idUser: ", action.data)

            const stateLogout = [...state.idUser]
            stateLogout.idUser = action.data
            return stateLogout

        default:
            return state

    }

}

export default CartReducer