import MyProvider from '@/Context/Provider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  ;

  useEffect(() => {

    const localStorageInfo = localStorage.getItem('isLogged') || '{}';
    const userIsLogged = JSON.parse(localStorageInfo)
    if (!userIsLogged?.isLogged && !['/', '/register'].includes(router.pathname)) {
      router.push('/');
    }

    if (userIsLogged?.isLogged && ['/', '/register'].includes(router.pathname)) {
      router.push('/home');
    }
  }, [router.pathname]);

  return(
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>
  )
}
