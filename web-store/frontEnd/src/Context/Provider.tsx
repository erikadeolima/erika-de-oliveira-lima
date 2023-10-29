import React, { useContext, useState } from "react";
import MyContext from "./Context";
import { TOrder, TProduct, TItem } from "./ContextTypes";




export default function MyProvider({ children }: { children: React.ReactNode }) {
  const [ordersHistory, setOrdersHistory] = useState<TOrder[]>([]);
  const [products, setProducts] = useState<TProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [cart, setCart] = useState<TItem[]>([]);
  const [order, setOrder] = useState<TOrder>({id: '', name: '', price: 0, quantity: 0, subTotal: 0});

  const context = {
    ordersHistory,
    setOrdersHistory,
    products,
    setProducts,
    total,
    setTotal,
    cart,
    setCart,
    order,
    setOrder,
    //newItem,
    //getCartItem,
    //saveCartItem,
  };

  return (
    <MyContext.Provider value={context}>
      {children}
    </MyContext.Provider>
  );
};
