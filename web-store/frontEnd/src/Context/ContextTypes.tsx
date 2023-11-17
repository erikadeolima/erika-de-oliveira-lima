export type TProduct= { 
  id: string,
  name: string,
  url_image: string,
  value: number
  description: string,
}

export type TItem = Omit<TProduct, 'url_image' | 'description'> & {
  url_image?: string,
  quantity: number,
  subTotal: number
};

export type TIsLogged = {
  isLogged: boolean,
  id: number,
  name: string,
  email: string,
  address: string,
  city: string,
  state: string,
  zipcode: string,
  neighborhood: string,
  phone: string,
}

export type ContextType = {
  ordersHistory: TItem[],
  setOrdersHistory: (ordersHistory: TItem[]) => void,
  products: TProduct[],
  setProducts: (products: TProduct[]) => void,
  total: number,
  setTotal: (total: number) => void,
  cart: TItem[],
  setCart: (cart: TItem[]) => void,
  item: TItem,
  setItem: (item: TItem) => void,
  isLogged: TIsLogged,
  setIsLogged: (isLogged: TIsLogged) => void,
  //unity: number,
  //setUnity: (unity: number) => void,
};

export const ContextDefultValues: ContextType = {
  ordersHistory: [],
  setOrdersHistory: () => {},
  products: [],
  setProducts: () => {},
  total: 0,
  setTotal: () => {},
  cart: [],
  setCart: () => {},
  item: {id: '', name: '', value: 0, quantity: 0, subTotal: 0},
  setItem: () => {},
  isLogged: {id: 0, name: '', email: '', address: '', city: '', state: '', zipcode: '', neighborhood: '', phone: '', isLogged: false},
  setIsLogged: () => {},
  //unity: 0,
  //setUnity: () => {},
}