import MyProvider from '@/Context/Provider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>
  )
}
