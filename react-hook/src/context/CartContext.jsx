import React, { createContext, useState } from 'react';

import queryString from 'query-string'
import PropTypes from 'prop-types';

import CartAPI from '../api/CartAPI';


export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [sumCount, setSumCount] = useState(0);

    const addToCart = async (product, count, rdSize, rdColor) => {
        if (!rdSize || !rdColor) {
            alert('Vui lòng chọn size, color')
            return;
        }


        const addCart = async () => {
            const cart = {
                userID: 'fd',
                productID: product._id,
                nameProduct: product.name,
                price: product.price,
                img: product.img,
                count: count,
                size: rdSize,
                color: rdColor
            }
            const query = '?' + queryString.stringify(cart)

            const response = await CartAPI.addcart(query)
            setSumCount(sumCount + count)
        }
        addCart()
    }

    return (
        <CartContext.Provider
            value={{
                sumCount,
                addToCart
            }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;