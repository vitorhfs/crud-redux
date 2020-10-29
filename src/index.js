import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import transactionReducer from './reducers/transactionReducer';

if (localStorage.getItem('transactions') === null)
  localStorage.setItem('transactions', JSON.stringify([]));
let initialState = {
  currentIndex: -1,
  list: JSON.parse(localStorage.getItem('transactions'))
};
const store = createStore(transactionReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

