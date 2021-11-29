import ProductAPI from "../../api/ProductAPI";
export const setProducts = (products) => {
    return {
        type: 'SET_PRODUCTS',
        payload: products
    }
}

export const fetchProducts = () => async (dispatch) => {
    const response = await ProductAPI.getAPI()
    dispatch(setProducts(response));
}