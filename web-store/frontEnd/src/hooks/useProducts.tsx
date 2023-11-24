import { TItem } from "@/Context/ContextTypes";
import Context from '@/Context/Context';
import React, { useContext, useEffect, useState } from 'react';
import { TCardProduct } from "@/components/CardProduct/CardProducts.types";

const useProducts = () =>{
  const { total, cart, setTotal, setCart, item, setItem } = useContext(Context);
  const [unity, setUnity] = useState(0);
  const getCartItem = (): TItem[] | [] => {
    if (typeof window === 'undefined') {
      return [];
    }
    const cartItemString = localStorage.getItem('cart') || null;
    if (cartItemString === null) {
      return [];
    }
      const cartItems = JSON.parse(cartItemString);
      return cartItems;
    };
  
  const saveCartItem = (item: TItem[]) => {
    localStorage.setItem('cart', JSON.stringify(item));
  };

  const removeCartStorage = () => {
    localStorage.removeItem('cart');
  };
  
  const newItem = (item: TItem) => {
    const getCartProducts = getCartItem() || [];
    if (getCartProducts.length === 0) {
      setCart([item]);
      return saveCartItem([item]);
    };
    const itemAlreadySave = getCartProducts.find(
      (productItem) => productItem.id === item.id,
    );
  
    if (itemAlreadySave) {
      getCartProducts.forEach((arrayItem: TItem) => {
        if (arrayItem.id === item.id) {
          arrayItem.quantity = item.quantity;
          arrayItem.subTotal = item.subTotal;
        }
      });
      setCart([...getCartProducts]);
      saveCartItem([...getCartProducts]); 
    } else {
      const updatedCart = [...getCartProducts, item]; 
      setCart(updatedCart);
      saveCartItem(updatedCart);
    }
  };

  const quantityInCart = (productId: string)=> {
    const cartItemString = getCartItem() || [];
    if (cartItemString.length !== 0) {
      const cart = JSON.parse(JSON.stringify(cartItemString));
        const itemEncontrado = cart.find((item: { id: string; }) => item.id === productId);
        return itemEncontrado ? itemEncontrado.quantity : 0;
    } else {
        return 0;
    }
  };

  const addInCart = ({id, name, url_image, value}: Omit<TCardProduct, 'description'>) => {
    setUnity(unity + 1);
    setItem({
        id: id,
        name: name,
        url_image: url_image,
        value: value,
        quantity: unity + 1,
        subTotal: value * (unity + 1)
    });
};

const removeItemOfCart = ({id, name, url_image, value}: Omit<TCardProduct, 'description'>) =>{
    const cartItemString = getCartItem() || [];
    const cart = JSON.parse(JSON.stringify(cartItemString));
    const itemEncontrado = cart.find((item: { id: string; }) => item.id === id);
    if (itemEncontrado) {
      const newCart = cart.filter((item: { id: string; }) => item.id !== id);

      setCart(newCart);
      saveCartItem(newCart);
    }
};

const removeOfCart = ({id, name, url_image, value}: Omit<TCardProduct, 'description'>) =>{
  setUnity(quantityInCart(id))
  if(unity > 0){
      setUnity(unity - 1);
  setItem({
      id: id,
      name: name,
      url_image: url_image,
      value: value,
      quantity: unity -1,
      subTotal: value * (unity -1)
  });
  } else {
      return;
  }
};

  return {
    newItem,
    getCartItem,
    saveCartItem,
    removeCartStorage,
    quantityInCart,
    addInCart,
    removeOfCart,
    removeItemOfCart,
  }
};

export default useProducts;