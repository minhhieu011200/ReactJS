import './App.css';

import Header from './component/container/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route } from "react-router-dom";

import Product from './container/Product';
import Detail from './component/pages/Detail'
import Carts from './component/pages/Cart'

import DetailContextProvider from "./context/DetailContext"
import CartContextProvider from "./context/CartContext"



// import { CartProvider } from "./context/Cart"


function About() {
  return <h2>About</h2>;
}




const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>

        <Header />

        <Route path="/" exact component={Product} />

        <DetailContextProvider>
          <Route path='/detail/:id' component={Detail} />
        </DetailContextProvider>

        <Route path="/carts" component={Carts} />

        <Route path="/manager" component={About} />

      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
