import NavBar from '@/components/NavBar'
import SearchFilter from '@/components/SearchFilter'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <NavBar />
        <SearchFilter />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
