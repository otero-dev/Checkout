import React from 'react';
import '../styles.css'
import {wrapper} from '../reducers';

const MyApp = ({Component, pageProps}) => (
    <Component {...pageProps} />
);

export default wrapper.withRedux(MyApp);