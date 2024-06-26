import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

// Default theme
import '@splidejs/react-splide/css';

// Redux
import store from './redux/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
  </BrowserRouter>
);


reportWebVitals();
