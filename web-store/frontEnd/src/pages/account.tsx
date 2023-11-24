// pages/formulario.js
import Header from '@/components/Header/Header';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import Context from '@/Context/Context';

import styles from "@/styles/Register.module.css";
import { Button } from '@mui/material';
import { Forms } from '@/components/Forms/Forms';

const myAccount = () => {
  const [dados, setDados] = useState({id: 0, name: '', email: '', address: '', city: '', state: '', zipcode: '', neighborhood: '', phone: '', isLogged: false});
  const {isLogged, setIsLogged} = useContext(Context);

  useEffect(() => {
    setDados(isLogged);
  }, []);

  return (
    
    <>
    <Header />
    <div className={styles.container}>
      <div >
      <Forms dadosIniciais={dados}/>
    </div>
    </div>
    </>
  );
};

export default myAccount;