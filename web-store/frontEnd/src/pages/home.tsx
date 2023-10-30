import { useContext, useEffect, useState } from "react";
import useServiceProducts from "./api/service/productsService";
import CardProduct from "@/components/CardProduct/CardProduct";
import { TCardProduct } from "@/components/CardProduct/CardProducts.types";
import styles from '../styles/Home.module.css';
import Banner from "@/components/Banner/Banner";
import Context from "@/Context/Context";
import Header from "@/components/Header/Header";

export default function Home () {
  const {products, loading, error} = useServiceProducts().getAllProducts();
  const {isLogged} = useContext(Context);
  console.log(isLogged);

  return (
    <main>
      <Header />
      <Banner />
      {error ? <div className={styles.error}><p>Erro ao carregar os produtos:</p><p>Verifique o serviço de back-end</p><p>E atualize a pagina</p></div> : <div className={styles.products}>
      {products.map((product) => (
        <CardProduct
          key={product.id}
          id={product.id}
          name={product.name}
          src={product.src}
          value={product.value}
          description={product.description}
        />
      ))
      }
    </div>}
    </main>
  )
}