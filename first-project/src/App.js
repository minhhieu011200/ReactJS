import React from "react";
import './App.css';

import Header from './component/header';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route } from "react-router-dom";

import Products from './component/pages/Products';
import Detail from './component/pages/Detail'
import Carts from './component/pages/Carts'

import { CartProvider } from "./context/Cart"


function About() {
  return <h2>About</h2>;
}


function App() {
  return(
    <CartProvider>
    <BrowserRouter>
          <Header/>
            <Route path="/" exact component={Products} />
            <Route path="/carts" component={Carts} />
            <Route path="/manager" exact component={About} />
            <Route path='/detail/:id' exact component={Detail}/>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App;
