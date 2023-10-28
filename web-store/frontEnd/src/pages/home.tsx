import { useEffect, useState } from "react";
import { getProducts } from "./api/service/productsService";
import CardProduct from "@/components/CardProduct/CardProduct";
import { TCardProduct } from "@/components/CardProduct/CardProducts.types";
import styles from '../styles/Home.module.css';

export default function Home () {
  const [products, setProducts] = useState<TCardProduct[]>([]);
  const apiProducts = async () =>{
    try {
      const produtos = await getProducts();
      setProducts(produtos);
    } catch (error: any) {
      console.error('Erro:', error.message);
    }
  };

  useEffect(() => {
    apiProducts();
  }, []);

  return (
    <div className={styles.products}>
      {products.map((product) => (
        <CardProduct
          key={product.id}
          id={product.id}
          name={product.name}
          url_image={product.url_image}
          value={product.value}
        />
      ))
      }
    </div>
  )
}