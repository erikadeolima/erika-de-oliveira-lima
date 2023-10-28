import React, { useContext, useEffect, useState } from 'react';
import { TCardProduct } from './CardProducts.types';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { HiCurrencyDollar } from 'react-icons/hi';
import { BsFillCartPlusFill, BsFillCartDashFill } from 'react-icons/bs';
import Context, {useMyContext} from '@/Context/Context';
import { TItem } from '@/Context/ContextTypes';
import styles from '../../styles/CardProduct.module.css';

export default function CardProduct({ id, name, url_image, value} : TCardProduct) {
const { newItem, total, cart, setTotal } = useContext(Context);
const [favorite, setFavorite] = useState(false);
const [item, setItem] = useState<TItem>({id: '', name: '', src: '', value: 0, quantity: 0, subTotal: 0});
const [unity, setUnity] = useState(0);

const favoriteProduct = () => {
    if (!favorite) {
        setFavorite(true);
    } else {
        setFavorite(false);
    };
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

const addInCart = () => {
    setUnity(unity + 1);
    setItem({
        id: id,
        name: name,
        src: url_image,
        value: value,
        quantity: unity + 1,
        subTotal: value * (unity + 1)
    });
};

const removeOfCart = () =>{
    if(unity > 0){
        setUnity(unity - 1);
    setItem({
        id: id,
        name: name,
        src: url_image,
        value: value,
        quantity: unity -1,
        subTotal: value * (unity -1)
    });
    } else {
        return;
    }
}

return (
    <div className={styles.CardProduct}>
        
        <div className={styles.heartIcon}>
            {favorite ?
                <i
                    className={"FillHeart"}
                    onClick={() => favoriteProduct()}>
                    {< AiFillHeart />}
                </i>
                :
                <i
                    className={"OutlineHeart"}
                    onClick={() => favoriteProduct()}>
                    {<AiOutlineHeart />}
                </i>
            }
        </div>
        <div className={styles.descriptionImg}>
            <img style={{width:'10rem'}} src={url_image} alt={name} />
        </div>
        <div className={styles.descriptionTxt}>
            <p>{name}</p>
            <div className={styles.productShop}>
                <HiCurrencyDollar className='cardIcon' />
                <p>{value}</p>
                < BsFillCartPlusFill className='addProduct' onClick={() => addInCart()} />
                <p>{unity}</p>
                <BsFillCartDashFill className='removeProduct' onClick={() => removeOfCart()}/>
            </div>
        </div>
    </div>
);
};