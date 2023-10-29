import { TCardProduct } from '@/components/CardProduct/CardProducts.types';
import React, { useContext, useEffect, useState } from 'react';
import styles from '../../styles/details.module.css';
import { HiCurrencyDollar } from 'react-icons/hi';
import { BsFillCartDashFill, BsFillCartPlusFill } from 'react-icons/bs';
import useProducts from '@/hooks/useProducts';
import { TItem } from '@/Context/ContextTypes';
import Context from '@/Context/Context';
import { useRouter } from 'next/router';
import useServiceProducts from '../api/service/productsService';

const Details = () => {
  const { total, cart, setTotal } = useContext(Context);
const [item, setItem] = useState<TItem>({id: '', name: '', src: '', value: 0, quantity: 0, subTotal: 0});
const [unity, setUnity] = useState(0);
const {newItem} = useProducts();
const router = useRouter();
  const { id } = router.query;
  const IDNumber = Number(id);
  const {product, loading, error} = useServiceProducts().getAllProductsById(IDNumber);
  const { id: IDProduct, name, url_image, value, description } = product;

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
        id: IDProduct,
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
        id: IDProduct,
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
    <div className={styles.Product}>
        <div className={styles.descriptionImg}>
            <img style={{height:'100%', width:'100%'}} src={url_image} alt={name} />
        </div>
        <div className={styles.descriptionTxt}>
            <p className={styles.name}>{name}</p>
            <p className={styles.description}>{description}</p>
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

export default Details;