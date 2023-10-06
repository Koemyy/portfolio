import { AppProps } from 'next/app';
import GoogleTagManager from '../components/GTM/GoogleTagManager';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        {/* Add other head elements here */}
        <GoogleTagManager />
        <Component {...pageProps} />
      </>
  );
}

export default MyApp;
