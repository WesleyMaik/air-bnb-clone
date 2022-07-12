//Modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router';
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import store from './store/index';

//Styles
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
)
