import React, { Component } from 'react';
import { Container, CardImg } from 'reactstrap';

import SelectCount from "./container/SelectCount";
import { CartContext } from '../../context/Cart'

import '../css/product.css'

class Carts extends Component {
    static contextType = CartContext;
    render() {
        const { cartItem, increaseCount, decreaseCount, onChangeCount, deleteCount } = this.context;
        return (
            <Container className="ml--3">
                <h2 className="mb-5 mt-2 text-center">Cart</h2>
                <table className="table">
                    <thead>
                        <tr className="bg-primary text-light">
                            <th scope="col">Sản phẩm</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Thành tiền</th>
                            <th scope="col">Xóa</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cartItem.map((item, index) => (
                            <tr key={index}>
                                <th className="table-borderless">
                                    <th><CardImg variant="top" style={{ width: "70px" }} src={"http://localhost:5000/" + item.img} /></th>
                                    <th>
                                        <tr>{item.nameProduct}</tr>
                                        <tr className="text-muted">
                                            {`Size: ${item.size}, Màu: ${item.color}`}
                                        </tr>
                                    </th>
                                </th>

                                <th className="pt-4">
                                    {new Intl.NumberFormat('vi-VN', { style: 'decimal', decimal: 'VND' }).format(item.price) + 'đ'}
                                </th>

                                <th className="pt-4">
                                    <SelectCount increaseCount={increaseCount} decreaseCount={decreaseCount} onChangeCount={onChangeCount} item={item}>
                                        {item.count}
                                    </SelectCount>
                                </th>

                                <th className="pt-4">
                                    {new Intl.NumberFormat('vi-VN', { style: 'decimal', decimal: 'VND' }).format(item.count * item.price) + 'đ'}
                                </th>

                                <th className="pt-4">
                                    <button className="btn-danger" onClick={() => { deleteCount(item) }}>X</button>
                                </th>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>

        )
    }

}

export default Carts;