import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='h-full bg-gray-100 overscroll-none' >
      <Head />
      <body className='h-full'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
