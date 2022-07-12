//Modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router';

//Styles
import "./styles/global.scss";

import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  </React.StrictMode>
)
