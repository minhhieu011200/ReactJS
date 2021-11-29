import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import store from './redux/reducer/store'
import store from './redux-toolkit/store'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

store.subscribe(() => {
  console.log(store.getState())
  localStorage.setItem('cart', JSON.stringify(store.getState().cart.carts))
});

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <App />
    </React.Fragment>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
