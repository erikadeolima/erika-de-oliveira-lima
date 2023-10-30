import { IFormInput, IFormPayload } from '@/components/Forms/Forms';
import { requestLogin, requestPost } from '../hello';
import { TIsLogged } from '@/Context/ContextTypes';

export type TUserInfo = { id: number, name: string, email: string, address: string, city: string, state: string, zipcode: string, neighborhood: string, phone: string } ;

export const login = async (email: string, password: string): Promise<TUserInfo> => {
  const body = { email, password };
  try {
    const response = await requestLogin('/', body);
    return response;
  } catch (error: any) {
    return error;
  }
};

export const registerUser = async (data: IFormPayload) => {
  try {
    const response = await requestPost('/register', data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to create user');
  }
};