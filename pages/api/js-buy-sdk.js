import fetch from 'node-fetch';
import Client from 'shopify-buy';

global.fetch = fetch;

const client = Client.buildClient({
	storefrontAccessToken: process.env.STORE_FRONT_ACCESS_TOKEN,
  	domain: process.env.STORE_URL
});

export default client;
