import MyProvider from '@/Context/Provider'
import Banner from '@/components/Banner/Banner';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [userIsLogged, setUserIsLogged] = useState({id: 0, name: '', email: '', address: '', city: '', state: '', zipcode: '', neighborhood: '', phone: '', isLogged: false});

  useEffect(() => {

    const localStorageInfo = localStorage.getItem('isLogged') || '{}';
    setUserIsLogged(JSON.parse(localStorageInfo));
    if (!userIsLogged?.isLogged && !['/', '/register'].includes(router.pathname)) {
      router.push('/');
    }

    if (userIsLogged?.isLogged && ['/', '/register'].includes(router.pathname)) {
      router.push('/home');
    }
  }, [router.pathname]);

  return(
    <MyProvider>
      {userIsLogged?.isLogged && <Header />}
      {userIsLogged?.isLogged && <Banner />}
      <Component {...pageProps} />
      {userIsLogged?.isLogged && <Footer />}
    </MyProvider>
  )
}
