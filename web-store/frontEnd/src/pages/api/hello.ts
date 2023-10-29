import { TCardProduct } from '@/components/CardProduct/CardProducts.types';
import axios, { AxiosResponse } from 'axios';


import { AxiosRequestConfig } from "axios";

export interface IGet {
  url:string;
  config?: AxiosRequestConfig;
};

export interface IPatch {
  url: string;
  config?: AxiosRequestConfig;
};

export interface IPost {
  url: string;
  config?: AxiosRequestConfig;
};

export interface IDelete {
  url: string;
  config?: AxiosRequestConfig;
};


const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const requestData = async (endpoint: string): Promise<TCardProduct[]> => {
  const { data }: AxiosResponse<TCardProduct[]> = await api.get(endpoint);
  return data;
};

export const requestUpdate = async (endpoint: string, body: any): Promise<any> => {
  const { data }: AxiosResponse<any> = await api.patch(endpoint, body);
  return data;
};

export const requestLogin = async (endpoint: string, body: any): Promise<any> => {
  const { data }: AxiosResponse<any> = await api.post(endpoint, body);
  return data;
};

export const requestPost = async (endpoint: string, body: any): Promise<any> => {
  const { data }: AxiosResponse<any> = await api.post(endpoint, body);
  return data;
};

export const requestDelete = async (endpoint: string, body: any): Promise<any> => {
  const { data }: AxiosResponse<any> = await api.delete(endpoint, body);
  return data;
};

export default api;
