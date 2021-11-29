import React,{createContext,Component} from 'react';
import axios from 'axios';

export const CartContext= createContext();

export class CartProvider extends Component{
    constructor(props){
        super(props);
        this.state={
            cartItem:[],
            sumCount:0
        }
    }
 
    async componentDidMount(){
        await axios.get('http://localhost:5000/api/cart/fd',{
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          this.setState({
              cartItem: res.data.carts,
            });
        })
        .catch(error => console.log(error));

        this.setSumCount()
    }

    setSumCount(){
        this.state.cartItem.forEach(item=>{
            this.setState({
                sumCount: this.state.sumCount+ item.count
            });
        })
    }

    addToCart=async (product,count,rdSize,rdColor)=>{
        if(!rdSize || !rdColor){
            alert('Vui lòng chọn size')
            return;
        }

        const cart={
            userID: 'fd',
            productID: product._id,
            nameProduct: product.name,
            price: product.price,
            img: product.img,
            count: count,
            size: rdSize,
            color: rdColor   
        }
        
        await axios.post('http://localhost:5000/api/cart/add', cart)
        .then(response => console.log(response))
        .catch(error => 
        {
            alert(error.message)
            return;
        });

        this.setState({
            ...this.state,
            cartItem: this.state.cartItem.concat(cart),
            sumCount: this.state.sumCount+ count
        })

    }

    decreaseCount=async (value)=>{
        const index= this.state.cartItem.indexOf(value);
        let count= value.count - 1;
        await axios.post('http://localhost:5000/api/cart/update',{
            id: value._id,
            userID: 'fd',
            count: Number(count),
            size: value.size,
            color: value.color
        })
        .then(response => console.log(response))
        .catch(error => 
        {
            alert(error.message)
            return;
        });
        this.setState({
            sumCount: this.state.sumCount-1,
            cartItem:[
                ...this.state.cartItem.slice(0, index),
                {
                    ...value,
                    count: count            
                },
                ...this.state.cartItem.slice(index+1)
            ]
        })
    }

    increaseCount=async (value)=>{
        const index= this.state.cartItem.indexOf(value);
        let count= value.count + 1;
        await axios.post('http://localhost:5000/api/cart/update',{
            id: value._id,
            userID: 'fd',
            count: Number(count),
            size: value.size,
            color: value.color
        })
        .then(response => console.log(response))
        .catch(error => 
        {
            alert(error.message)
            return;
        });


        this.setState({
            sumCount: this.state.sumCount+1,
            cartItem:[
                ...this.state.cartItem.slice(0, index),
                {
                    ...value,
                    count: Number(count)             
                },
                ...this.state.cartItem.slice(index+1)
            ]
        })
    }

    onChangeCount=async (value, item)=>{
        const index= this.state.cartItem.indexOf(item);
        let count= value;
        await axios.post('http://localhost:5000/api/cart/update',{
            id: item._id,
            userID: 'fd',
            count: Number(count),
            size: item.size,
            color: item.color
        })
        .then(response => console.log(response))
        .catch(error => 
        {
            alert(error.message)
        });         
        this.setState({
            sumCount: this.state.sumCount+ Number(count) - item.count,
            cartItem:[
                ...this.state.cartItem.slice(0, index),
                {
                    ...item,
                    count: Number(count)            
                },
                ...this.state.cartItem.slice(index+1)
            ]
        });
    }
    
    deleteCount=async(value)=>{
        await axios.post('http://localhost:5000/api/cart/delete',{
            id: value._id,
            userID: 'fd'
        })
        .then(response => console.log(response))
        .catch(error => 
        {
            alert(error.message)
        }); 
        let updateCart= this.state.cartItem.filter((item)=>{
                return item !== value
        })
        this.setState({
            sumCount: this.state.sumCount -Number(value.count),
            cartItem: updateCart
        })
    }
   
    render(){
        return(
            <CartContext.Provider
                value={{
                    ...this.state,
                    addToCart: this.addToCart,
                    decreaseCount: this.decreaseCount,
                    increaseCount: this.increaseCount,
                    onChangeCount: this.onChangeCount,
                    deleteCount: this.deleteCount
            }}>
                { this.props.children }
            </CartContext.Provider>
        )

    }
}

