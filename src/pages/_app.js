import { Analytics } from '@vercel/analytics/react';
import Layout from 'src/components/Layout';
import 'src/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}
