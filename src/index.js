import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from 'shopify-buy';

import './index.css';

const client = Client.buildClient({
  storefrontAccessToken: '1782e2dcf9a2d08157e86e2ba7c1d0dd',
  domain: 'unpillow.myshopify.com'
});

ReactDOM.render(
  <App client={client}/>,
  document.getElementById('root')
);
