import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { TCardProduct } from './CardProductsCart.types';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TbMoneybag } from "react-icons/tb";
import { HiCurrencyDollar } from 'react-icons/hi';
import { BsFillCartPlusFill, BsFillCartDashFill } from 'react-icons/bs';
import { MdRemoveShoppingCart } from "react-icons/md";
import Context from '@/Context/Context';
import styles from '../../styles/CardProductCart.module.css';
import useProducts from '../../hooks/useProducts';
import { TItem } from '@/Context/ContextTypes';


export default function CardProductCart({ id, name, url_image, value, quantity, subTotal} : TItem) {
    const router = useRouter();
const { total, cart, setTotal, item, setItem } = useContext(Context);
const [favorite, setFavorite] = useState(false);
//const [item, setItem] = useState<TItem>({id: '', name: '', url_image: '', value: 0, quantity: 0, subTotal: 0});
const [unity, setUnity] = useState(0);
const {newItem, quantityInCart, addInCart, removeOfCart, removeItemOfCart } = useProducts();

const redirectToDetails = (id: string) => {
    router.push(`/details/${id}`);
  };

useEffect(() => {
    if (item.id) {
        newItem(item);
    }
}, [item]);

useEffect(() => {
    if (cart) {
        const totalValue = cart
            .reduce((acc, crr) => (acc + crr.subTotal), 0);
        setTotal(totalValue);
    };
}, [cart, total, setTotal]);

return (
    <>
    {quantityInCart(id) === 0 ? (<></>): (<div className={styles.CardProduct}>
        <div className={styles.descriptionImg} onClick={() => redirectToDetails(id)}>
            <img style={{height:'18vh', width:'16vh'}} src={url_image} alt={name} />
            <p className={styles.name}>{name}</p>
        </div>
        <div className={styles.productShop}>
            <div className={styles.value}>
                <HiCurrencyDollar className='cardIcon' />
            <p>{value}</p></div>
            <div className={styles.value}>
                <TbMoneybag className='cardIcon' />
            <p>{subTotal}</p></div>
            <div className={styles.cartInteraction}>
            < BsFillCartPlusFill className='addProduct' onClick={() => addInCart({ id, name, url_image: url_image!, value})} />
            <p>{quantityInCart(id)}</p>
            <BsFillCartDashFill className='removeProduct' onClick={() => removeOfCart({ id, name, url_image: url_image!, value})}/>
            </div>
            {/* <div className={styles.removeCart} onClick={() => removeItemOfCart({ id, name, url_image: urlImage, value})}>
                <MdRemoveShoppingCart />
                <p>Remove</p>
            </div> */}
        </div>
        </div>)}
    </>
);
};