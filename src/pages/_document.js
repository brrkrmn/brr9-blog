import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Berra Karaman's Blog</title>
        <meta name="author" content="Berra Karaman" />
        <meta name="description" content="Join me on my journey through frontend development as I share tips, insights, and discoveries." />
        <meta name="keywords" content="Javascript, React, frontend, developer, outreachy, internship"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
