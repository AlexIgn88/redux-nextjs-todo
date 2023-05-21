import { Provider } from 'react-redux';
import { store } from '../redux/store.js';



export default function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>;
}