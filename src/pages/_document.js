import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Berra Karaman's Blog</title>
        <meta name="author" content="Berra Karaman" />
        <meta name="description" content="Join me on my journey through frontend development as I share tips, insights, and discoveries." />
        <meta name="keywords" content="Javascript, React, frontend, developer, outreachy, internship"/>
        <meta name="google-site-verification" content="jLk66QHI5hgaNW_ak6aXN3HV5NoO1JcC0OoAcRwuM8k" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
