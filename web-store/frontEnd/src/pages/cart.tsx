import Context from '@/Context/Context';
import React, { useContext, useEffect, useState } from 'react';
import useServiceProducts from "./api/service/productsService";
import CardProduct from "@/components/CardProduct/CardProduct";
import { TCardProduct } from "@/components/CardProduct/CardProducts.types";
import styles from '../styles/Cart.module.css';
import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CardProductCart from "@/components/CardProductCart/CardProductCart";
import useProducts from "@/hooks/useProducts";
import CardCartInfo from "@/components/CardCartInfo/CardCartInfo";
import { ClassNames } from "@emotion/react";
import { useRouter } from 'next/router';

export default function Cart () {
  const { total, setTotal } = useContext(Context);
  const products = useProducts().getCartItem();
  const router = useRouter();

  const toLogin = () => {
      router.push('/');
  };

  useEffect(() => {}, [products]);
  return (
  <div className={styles.container}>
    <div className={styles.cartList}>
    <div className={styles.CartContainer}>
      {total !== 0 ? (
        <div className={styles.productsCart}>
          {products.map((product) => (
            <CardProductCart
              key={product.id}
              id={product.id}
              name={product.name}
              url_image={product.url_image||''}
              value={product.value}
              quantity={product.quantity}
              subTotal={product.subTotal}
              
            />
          ))
          }
        </div>):(<div className={styles.container} onClick={()=>toLogin()}><p className={styles.error
        }>Carrinho vazio ! </p><p className={styles.error}>Faça suas compras!</p></div>)}
      </div>
    </div>
      {total !== 0 ? (<div className={styles.CartInfo}><CardCartInfo /></div>):(<></>)}
  </div>
  )
}