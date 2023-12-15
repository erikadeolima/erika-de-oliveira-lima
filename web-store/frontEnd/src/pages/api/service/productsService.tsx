import { TCardProduct } from '@/components/CardProduct/CardProducts.types';
import { requestData, requestAllData } from '../hello';
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
          const response = await requestAllData('/home');
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
  const getProductsById = (id: string) => {
    const [product, setProduct] = useState<TProduct>({
      id: '',
      name: '',
      url_image: '',
      value: 0,
      description: ''
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
  
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await requestData(`/details/${id}`);
          setProduct({
            id: response.id,
            name: response.name,
            url_image: response.url_image,
            value: response.value,
            description: response.description,
          });
          setLoading(false);
        } catch (error) {
          setError(error as any);
          setLoading(false);
        }

      };
  
      fetchProduct();
    }, [id]);
  
    return { product, loading, error };
  };
  
  return { getAllProducts, getProductsById };
};

export default useServiceProducts;