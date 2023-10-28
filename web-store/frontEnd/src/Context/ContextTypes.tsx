export type TOrder = {
  id: string,
  name: string,
  price: number,
  quantity: number,
  subTotal: number,
};

export type TItem = TProduct & {
  quantity: number, subTotal: number};

export type TProduct= { id: string, name: string, src: string, value: number }

export type ContextType = {
  ordersHistory: TOrder[],
  setOrdersHistory: (ordersHistory: any) => void,
  products: TProduct[],
  setProducts: (products: any) => void,
  total: number,
  setTotal: (total: any) => void,
  cart: TItem[],
  setCart: (cart: any) => void,
  order: TOrder,
  setOrder: (order: any) => void,
  newItem: (TItem: any) => void,
  getCartItem:() => TItem[] | null,
  saveCartItem: (item: TItem[]) => void,
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
  order: {id: '', name: '', price: 0, quantity: 0, subTotal: 0},
  setOrder: () => {},
  newItem: () => {},
  getCartItem: () => null,
  saveCartItem: () => {},
}