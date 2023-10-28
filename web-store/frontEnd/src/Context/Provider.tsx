import React, { useContext, useState } from "react";
import MyContext from "./Context";
import { TOrder, TProduct, TItem } from "./ContextTypes";




export default function MyProvider({ children }: { children: React.ReactNode }) {
  const [ordersHistory, setOrdersHistory] = useState<TOrder[]>([]);
  const [products, setProducts] = useState<TProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [cart, setCart] = useState<TItem[]>([]);
  const [order, setOrder] = useState<TOrder>({id: '', name: '', price: 0, quantity: 0, subTotal: 0});

  const getCartItem = (): TItem[] | null => {
    const cartItemString = localStorage.getItem('cart');
    if (cartItemString === null) {
      return null; 
    }

    const cartItems = JSON.parse(cartItemString);
    return cartItems;
  };
  
  const saveCartItem = (item: TItem[]) => {
    localStorage.setItem('cart', JSON.stringify(item));
  };
  
  const newItem = (item: TItem) => {
    const getCartProducts = getCartItem() || [];
    const itemAlreadySave = getCartProducts.find(
      (productItem) => productItem.id === item.id,
    );
    if (getCartProducts.length === 0) {
      setCart([item]);
      return saveCartItem([item]);
    };
  
    if (itemAlreadySave) {
      getCartProducts.forEach((arrayItem) => {
        if (arrayItem.id === item.id) {
          arrayItem.quantity = item.quantity;
          arrayItem.subTotal = item.subTotal;
        }
      });
      setCart(getCartProducts);
      saveCartItem(getCartProducts);
    } else {
      getCartProducts.push(item);
      setCart(getCartProducts);
      saveCartItem(getCartProducts);
    }
  };

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
    newItem,
    getCartItem,
    saveCartItem,
  };

  return (
    <MyContext.Provider value={context}>
      {children}
    </MyContext.Provider>
  );
};
