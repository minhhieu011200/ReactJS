import { connect } from "react-redux"

import Product from "../component/pages/Product";

// import { setProducts, fetchProducts } from "../redux/action/ProductAction"
import { setProducts, fetchProducts } from "../redux-toolkit/productReducer"

const mapStatetoProps = (state) => ({
    products: state.product.products
})

const mapDispatchToProps = (dispatch) => ({
    setProducts: (products) => dispatch(setProducts(products)),
    fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mapStatetoProps, mapDispatchToProps)(Product)