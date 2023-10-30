import Context from '@/Context/Context';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import styles from '../../styles/header.module.css';

const Header = () => {
  const {isLogged, setIsLogged} = useContext(Context);
  const router = useRouter();
  const { name: usuario } = isLogged;
  const onLogout = () => {
    setIsLogged({id: 0, name: '', email: '', address: '', city: '', state: '', zipcode: '', neighborhood: '', phone: '', isLogged: false});
    localStorage.clear();
    router.push('/');
  };
  const goHome = () => {
    if(usuario){
      router.push('/home');
    }else{
      router.push('/');
    }
  };
  const goCart = () => {
    if(usuario){
      //router.push('/cart');
      return;
    }else{
      router.push('/');
    }
  };
  const toLogin = () => {
    if(!usuario){
      router.push('/');
    }else{
      return;
    }
  };
  return (
    <div className={styles.header}>
      <div className={styles.session} onClick={goHome}>Home</div>
      <div className={styles.session} onClick={toLogin}>{usuario ? usuario : 'Login'}</div>
      {usuario && <div className={styles.session} onClick={goCart}>Cart</div>}
      {usuario && <div className={styles.session} onClick={onLogout}>Logout</div>}
    </div>
  );
};

export default Header;