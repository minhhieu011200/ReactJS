import React, { Component } from 'react';
import axios from 'axios';

import {
  Card, CardImg, CardTitle, CardText, CardGroup, CardBody, Container, Row, Col, CardSubtitle
} from 'reactstrap';

import '../css/product.css'

import { Link } from 'react-router-dom';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }

  
  componentDidMount(){
    axios.get('http://localhost:5000/api/product',{
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      this.setState({ products:res.data });
    })
    .catch(error => console.log(error));
  }

  render(){
    const {products}=this.state
    return (
      <Container>
        <h2 className="mb-5 mt-5 text-center">Product</h2>
        <Row className="d-flex justify-content-center justify-content-sm-start">
        {
            products.map((p,index)=>(
              <Col sm="6" md="4" xl="3" className="mb-3 product" key={index}>
                <CardGroup>
                <Card  className="text-center text-dark ">
                  <CardImg variant="top" className="img-responsive" src={"http://localhost:5000/"+p.img} />
                  <CardBody>                   
                    <CardTitle className="title">
                      {p.name}
                    </CardTitle>

                    <CardSubtitle className="money">
                       {new Intl.NumberFormat('vi-VN',{style: 'decimal',decimal: 'VND'}).format(p.price)+ 'đ'}
                    </CardSubtitle>

                    <CardText className="text-left text-muted description">
                      {p.description}
                    </CardText>

                    <Link to={"/detail/"+p._id}  className="btn-detail p-1">Đặt hàng</Link>
                      

                  </CardBody>
                </Card>   
                </CardGroup>
              </Col> 
     
          ))
        }
        </Row>
      </Container>
    )
  }
}

export default Products;
