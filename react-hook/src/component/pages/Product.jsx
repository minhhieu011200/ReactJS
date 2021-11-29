import React, { useEffect } from 'react';

import {
    Card, CardImg, CardTitle, CardText, CardGroup, CardBody, Container, Row, Col, CardSubtitle
} from 'reactstrap';


import { Link } from 'react-router-dom';

import '../css/product.css'

const Product = ({ products, fetchProducts }) => {

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    return (
        <Container>
            <h2 className="mb-5 mt-5 text-center">Product</h2>

            {products.length > 0 ?
                (
                    <Row className="d-flex justify-content-center justify-content-sm-start">
                        {
                            products.map((p, index) => (
                                <Col sm="6" md="4" xl="3" className="mb-3 product" key={index}>
                                    <CardGroup>
                                        <Card className="text-center text-dark ">
                                            <CardImg variant="top" className="img-responsive" src={"http://localhost:5000/" + p.img} />
                                            <CardBody>
                                                <CardTitle className="title">
                                                    {p.name}
                                                </CardTitle>

                                                <CardSubtitle className="money">
                                                    {new Intl.NumberFormat('vi-VN', { style: 'decimal', decimal: 'VND' }).format(p.price) + 'đ'}
                                                </CardSubtitle>

                                                <CardText className="text-left text-muted description">
                                                    {p.description}
                                                </CardText>

                                                <Link to={"/detail/" + p._id} className="btn-detail p-1">Đặt hàng</Link>
                                            </CardBody>
                                        </Card>
                                    </CardGroup>
                                </Col>

                            ))
                        }
                    </Row>
                )
                : (<div className="empty">Không có sản phẩm nào</div>)
            }

        </Container>
    );
}

export default Product;