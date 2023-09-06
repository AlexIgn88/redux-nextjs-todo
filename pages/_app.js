import { Provider } from 'react-redux';
import { store } from '../redux/store.js';
import "../styles/style.css";
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return <Provider store={store} >
    <Head>
      <link rel="icon" href="/img/favicon.jpg" />
    </Head>
    <Component {...pageProps} />
  </Provider>;
}