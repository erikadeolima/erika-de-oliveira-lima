import { TCardProduct } from '@/components/CardProduct/CardProducts.types';
import { requestData } from '../hello';
import { AxiosResponse } from 'axios';

interface MyError {
  message: string;
}


export const getProducts = async (): Promise<TCardProduct[]> => {
  try {
    const response = await requestData('/home');
      return response;
  } catch (error) {
    throw error;
  }
};