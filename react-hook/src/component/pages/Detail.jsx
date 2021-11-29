import React, { useEffect, useState, useContext } from 'react';

import {
    CardImg, CardTitle, CardText, Container, Row, Col, CardSubtitle
} from 'reactstrap';

import { useDispatch } from 'react-redux';

// import { CartContext } from '../../context/CartContext'
import { DetailContext } from '../../context/DetailContext'
import { addToCart } from '../../redux-toolkit/cartReducer'

import ProductAPI from '../../api/ProductAPI';

import SelectColor from '../container/SelectColor';
import SelectSize from '../container/SelectSize';
import SelectCount from '../container/SelectCount';
import HorizontalProduct from '../container/HorizontalProduct';
import Comment from '../container/Comment';

const Detail = (props) => {
    const dispatch = useDispatch()
    const { count, rdSize, rdColor } = useContext(DetailContext);
    const id = props.match.params.id

    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchAllData = async () => {
            const response = await ProductAPI.getDetail(id)
            response.img = "http://localhost:5000/" + response.img;
            setProduct(response);
        }
        fetchAllData()
    }, [])

    const handleAddtoCart = async () => {
        const data = {
            product, count, rdSize, rdColor
        }

        dispatch(addToCart(data))
        console.log(data)
    }



    return (
        <Container>
            <h2 className="mb-5 mt-2 text-center">Detail</h2>
            {product &&
                <div className="content">
                    <Row>

                        <Col sm="12" md="6" xl="4" className="text-center">
                            <CardImg variant="top" className="img-responsive" src={product.img} />
                        </Col>
                        <Col sm="8" md="6" xl="8" className="align-self-center">
                            <CardTitle className="title mb-3">
                                {product.name}
                            </CardTitle>

                            <CardSubtitle className="money mb-3">
                                {new Intl.NumberFormat('vi-VN', { style: 'decimal', decimal: 'VND' }).format(product.price) + 'đ'}
                            </CardSubtitle>

                            <div className="mb-3">
                                <h6 className="mr-3">Số lượng: </h6>
                                <SelectCount item={product} />
                            </div>

                            <div className="select-size mb-3">
                                <h6>Chọn size</h6>
                                <SelectSize />
                            </div>

                            <h6>Chọn màu</h6>
                            <div className="select-color mb-3 d-flex">
                                <SelectColor />
                            </div>

                            <button type="button" className="btn btn-primary" onClick={handleAddtoCart}>Đặt hàng</button>
                        </Col>

                    </Row>

                    <h2 className="mb-3 mt-3">Description</h2>
                    <CardText className="mb-3">
                        {product.description}
                    </CardText>

                </div>
            }

            <HorizontalProduct />

            <Comment />


        </Container>
    );
}

export default Detail;