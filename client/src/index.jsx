import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import AppRouter from './routes/AppRouter';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
