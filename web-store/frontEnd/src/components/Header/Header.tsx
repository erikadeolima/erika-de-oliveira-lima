import Context from '@/Context/Context';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import styles from '../../styles/header.module.css';
import { getUserInfo } from '../../utils';

const Header = () => {
  const [user, setUser] = useState({id: 0, name: '', isLogged: false});
  const {isLogged, setIsLogged} = useContext(Context);
  const router = useRouter();
  const onLogout = () => {
    setIsLogged({id: 0, name: '', email: '', address: '', city: '', state: '', zipcode: '', neighborhood: '', phone: '', isLogged: false});
    localStorage.removeItem('isLogged');
    router.push('/');
  };

 useEffect(()=>{
    const getLoggedUser = async () => {
      const user = await getUserInfo();
      if(user){
        setUser(user);
      }
    }
    getLoggedUser();
  },[]);

  const goHome = () => {
    if(user.isLogged){
      router.push('/home');
    }else{
      router.push('/');
    }
  };

  const goCart = () => {
    if(user.isLogged){
      router.push('/cart');
    }else{
      router.push('/');
    }
  };

  const toLogin = () => {
    if(!user.isLogged){
      router.push('/');
    }else{
      return;
    }
  };

  const toAccount = () => {
    router.push('/account');
  };

  const redirect = () =>{
    if(user.isLogged){
      router.push('/account');
    }else{
      router.push('/login');
    }
  }
  
  return (
    <div className={styles.header}>
      <div className={styles.session} onClick={goHome}>Home</div>
      <div className={styles.session} onClick={redirect}>{user.isLogged ? `Minha Conta - ${user.name}` : 'Login'}</div>
      {user && <div className={styles.session} onClick={goCart}>Cart</div>}
      {user && <div className={styles.session} onClick={onLogout}>Logout</div>}
    </div>
  );
};

export default Header;