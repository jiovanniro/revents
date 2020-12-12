import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';
import App from './app/layout/App.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configStore from './app/store/configStore';
import ScrollToTop from './app/layout/ScrollToTop';

const store = configStore();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <ScrollToTop />
      <React.StrictMode>
        <App />
      </React.StrictMode>  
    </BrowserRouter>  
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
