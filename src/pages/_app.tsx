import '@styles/globals.css';
import { AppProps } from 'node_modules/next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
