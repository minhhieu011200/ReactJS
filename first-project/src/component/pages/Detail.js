import React, { Component } from 'react';

import axios from 'axios';
import {
    CardImg, CardTitle, CardText, Container, Row, Col, CardSubtitle
} from 'reactstrap';

import '../css/product.css'

import { CartContext } from '../../context/Cart'

import SelectColor from './container/SelectColor'
import SelectCount from './container/SelectCount';

class Detail extends Component {
    state = {
        product:{},
        count: 1,
        color:["Trắng","Đen","Đỏ"],
        img:""
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get('http://localhost:5000/api/product/'+id,{
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          this.setState({
              ...this.state, 
              product:res.data,
              img: "http://localhost:5000/"+ res.data.img
         });
        })
        .catch(error => console.log(error));
    }

    increaseCount=(value)=>{
        this.setState({
            ...this.state,
            count: this.state.count+1
        })
    }

    
    decreaseCount=(value)=>{
        this.setState({
            ...this.state,
            count: this.state.count-1
        }) 
    }

    onHandleChange=(event)=>{
        var target= event.target;
        var value=target.value;
        console.log(target);
        this.setState({
            ...this.state,
            rdSize:value
        })
    }

    onClickColor=(value)=>{
        this.setState({
            ...this.state,
            rdColor:value
        })
    }

    onChangeCount=(value, item)=>{         
        this.setState({
            ...this.state,
            count: Number(value)
        });
    }

    render() {
        const {product,color,rdSize,count,rdColor,img}=this.state
        
        return (         
            <Container>
                <h2 className="mb-5 mt-2 text-center">Detail</h2>
                <Row>
                    <Col sm="12" md="6" xl="4" className="text-center">
                        <CardImg variant="top" className="img-responsive" src={img}/>
                    </Col>
                    <Col sm="8" md="6" xl="8" className="align-self-center">
                        <CardTitle className="title mb-3">
                            {product.name}
                        </CardTitle>

                        <CardSubtitle className="money mb-3">
                             {new Intl.NumberFormat('vi-VN',{style: 'decimal',decimal: 'VND'}).format(product.price)+ 'đ'}
                        </CardSubtitle>

                        <h6 className="mr-3">Số lượng: </h6>
                        <SelectCount decreaseCount={this.decreaseCount} increaseCount={this.increaseCount} onChangeCount={this.onChangeCount}>
                            {count}
                        </SelectCount>

                        <div className="select-size mb-3">
                            <h6>Chọn size</h6>
                            <input type="radio"
                                className="btn-check" 
                                name="size" 
                                id="rdSizeS" 
                                value="S" 
                                onChange={this.onHandleChange}
                                checked={rdSize==='S'}/>
                             <label className="btn btn-outline-primary mr-3 lb-size" htmlFor="rdSizeS">S</label>

                            <input type="radio"
                                className="btn-check" 
                                name="size" 
                                id="rdSizeM" 
                                value="M" 
                                onChange={this.onHandleChange}
                                checked={rdSize==='M'}/>
                            <label className="btn btn-outline-primary mr-3 lb-size" htmlFor="rdSizeM">M</label>

                            <input type="radio"
                                className="btn-check"
                                name="size" 
                                id="rdSizeL" 
                                value="L" 
                                onChange={this.onHandleChange}
                                checked={rdSize==='L'}/>
                            <label className="btn btn-outline-primary mr-3 lb-size" htmlFor="rdSizeL">L</label>
                        </div>

                        <h6>Chọn màu</h6>
                        <div className="select-color mb-3 d-flex">
                            {
                                color.map((color,index)=>(                                 
                                    <SelectColor color={color} index={index} rdColor={rdColor} onClickColor={this.onClickColor} key={index}/>
                                ))
                            }
                        </div>

                        <CartContext.Consumer>
                            {(cart)=><button type="button" className="btn btn-primary" onClick={()=>cart.addToCart(product,count,rdSize,rdColor)}>Đặt hàng</button>}
                        </CartContext.Consumer>          

                    </Col>

                </Row>

                <h2 className="mb-3 mt-3">Description</h2>
                <CardText className="mb-3">
                    {product.description}
                </CardText>
            </Container>

        )
    }

}

export default Detail;