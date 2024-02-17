import { Html, Main, NextScript } from 'next/document'
import Head from 'next/head'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Berra Karaman</title>
        <meta name="description" content="A self-taught developer's blog" />
        <meta name="keywords" content="frontend, developer, outreachy, internship" />
        <link rel="icon" href="../../public/images/profile.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
