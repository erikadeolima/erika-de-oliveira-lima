import { TCardProduct } from '@/components/CardProduct/CardProducts.types';
import { requestData } from '../hello';
import { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
import { TItem, TProduct } from '@/Context/ContextTypes';


interface MyError {
  message: string;
}

const useServiceProducts = () => {
  const getAllProducts = () => {
    const [products, setProducts] = useState<TProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {  
          const response = await requestData('/home');
          setProducts(response);
          setLoading(false);
        } catch (error) {
          setError(error as any);
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, []);
  
    return { products, loading, error };
  };
  const getAllProductsById = (id:string) => {
    const [product, setProduct] = useState<TProduct>({id: '', name: '', src: '', value: 0, description: ''});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {  
          const response = await requestData(`/details/${id}`);
          const { 
            id: IDNumber, 
            name, 
            src, 
            value, 
            description 
          } = response;
          setProduct({ 
            id: IDNumber, 
            name, 
            src, 
            value, 
            description 
          });
          setLoading(false);
        } catch (error) {
          setError(error as any);
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, []);
  
    return { product, loading, error };
  };
  return { getAllProducts, getAllProductsById };
};

export default useServiceProducts;