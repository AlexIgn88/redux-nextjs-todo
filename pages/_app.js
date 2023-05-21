import { Provider } from 'react-redux';
import { store } from '../redux/store.js';
import "../styles/style.css";

export default function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>;
}