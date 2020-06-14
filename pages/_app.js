import React from 'react';
import '../styles.css'
import {wrapper} from '../reducers';
import 'react-phone-input-2/lib/style.css'

const MyApp = ({Component, pageProps}) => (
    <Component {...pageProps} />
);

export default wrapper.withRedux(MyApp);