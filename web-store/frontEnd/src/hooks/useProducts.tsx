import { TItem } from "@/Context/ContextTypes";
import Context from '@/Context/Context';
import { useContext } from "react";

const useProducts = () =>{
  const { total, cart, setTotal, setCart } = useContext(Context);
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

  const removeCartStorage = () => {
    localStorage.removeItem('cart');
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

  const quantityInCart = (productId: string)=> {
    const cartItemString = localStorage.getItem('cart');
    if (cartItemString !== null) {
        const cart = JSON.parse(cartItemString);
        const itemEncontrado = cart.find((item: { id: string; }) => item.id === productId);
        return itemEncontrado ? itemEncontrado.quantity : 0;
    } else {
        return 0;
    }
}
  return {
    newItem,
    getCartItem,
    saveCartItem,
    removeCartStorage,
    quantityInCart,
  }
};

export default useProducts;