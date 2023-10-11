import { IFormInput, IFormPayload } from '@/components/Forms/Forms';
import { requestLogin, requestPost } from '../hello';


export const login = async (email: string, password: string): Promise<any> => {
  const body = { email, password };
  try {
    const response = await requestLogin('/', body);
    return response;
  } catch (error) {
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