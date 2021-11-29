import axiosClient from './axiosClient'

const CartAPI = {
    addcart: (query) => {
        const url = `/cart/add${query}`
        return axiosClient.post(url)
    }

}

export default CartAPI