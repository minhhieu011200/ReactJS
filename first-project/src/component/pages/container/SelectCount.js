import React,{Component} from 'react';

import {
    ButtonGroup, Button
} from 'reactstrap';


import '../../css/product.css'

class SelectCount extends Component {
    onHandelDecreaseCount=()=>{
        if(this.props.children>1){
            this.props.decreaseCount(this.props.item)
        }
    }

    onHandelIncreaseCount=()=>{
        if(this.props.children<20){
            this.props.increaseCount(this.props.item)
        }
    }

    onHandleChangeCount=(e)=>{
        const value=e.target.value
        if(!Number.isNaN(value) && Number(value)>0 && Number(value)<21){
            this.props.onChangeCount(value, this.props.item);
        }
    }

    render(){
        console.log(this.props.check)
        return(
            <ButtonGroup aria-label="Basic example" className="mb-4">
                <Button className="btn-info btn-gradient" onClick={this.onHandelDecreaseCount} >-</Button>
                <input className="input-number text-center count" value={this.props.children} onChange={this.onHandleChangeCount} type="text"/>
                <Button className="btn-info btn-gradient" onClick={this.onHandelIncreaseCount}>+</Button>
            </ButtonGroup> 
        )     

    }

    
}

export default SelectCount