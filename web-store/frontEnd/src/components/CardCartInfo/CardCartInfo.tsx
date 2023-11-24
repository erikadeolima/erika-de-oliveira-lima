import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Context from '@/Context/Context';
import styles from '../../styles/CardCartInfo.module.css';
import useProducts from '../../hooks/useProducts';


export default function CardCartInfo() {
    const router = useRouter();
const { total, setTotal } = useContext(Context);
const { getCartItem } = useProducts();

let haveCart;

useEffect(()=>{
    const result = getCartItem();
if(result.length === 0){
    haveCart = false;
}else{
    haveCart = true;
}
}, [])


return (
    <><div className={styles.Card}>
        <p className={styles.text}>Valor total: {total}</p>
        <p className={styles.text}> Finalizar Compra</p>
        </div>
    </>
);
};