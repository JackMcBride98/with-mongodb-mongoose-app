import '../styles/globals.css';
import Head from 'next/head';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SSR CRUD</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
