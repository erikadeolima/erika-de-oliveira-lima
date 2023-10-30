import React, { useContext, useState } from "react";
import MyContext from "./Context";
import { TProduct, TItem, TIsLogged } from "./ContextTypes";




export default function MyProvider({ children }: { children: React.ReactNode }) {
  const [ordersHistory, setOrdersHistory] = useState<TItem[]>([]);
  const [products, setProducts] = useState<TProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [cart, setCart] = useState<TItem[]>([]);
  const [item, setItem] = useState<TItem>({
    id: '',
    name: '',
    src: '',
    value: 0,
    quantity: 0,
    subTotal: 0
  });
  const [unity, setUnity] = useState(0);
  const [isLogged, setIsLogged] = useState<TIsLogged>({id: 0, name: '', email: '', address: '', city: '', state: '', zipcode: '', neighborhood: '', phone: '', isLogged: false});

  const context = {
    ordersHistory,
    setOrdersHistory,
    products,
    setProducts,
    total,
    setTotal,
    cart,
    setCart,
    item,
    setItem,
    isLogged,
    setIsLogged,
    //unity,
    //setUnity,
  };

  return (
    <MyContext.Provider value={context}>
      {children}
    </MyContext.Provider>
  );
};
