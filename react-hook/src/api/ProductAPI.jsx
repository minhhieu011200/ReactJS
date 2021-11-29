import axiosClient from "./axiosClient"

const ProductAPI = {

    getAPI: () => {
        const url = '/product'
        return axiosClient.get(url)
    },
    getDetail: (id) => {
        const url = `/product/${id}`
        return axiosClient.get(url)
    }
}

export default ProductAPI