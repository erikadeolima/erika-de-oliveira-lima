import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/details.module.css';
import { HiCurrencyDollar } from 'react-icons/hi';
import { BsFillCartDashFill, BsFillCartPlusFill } from 'react-icons/bs';
import useProducts from '@/hooks/useProducts';
import Context from '@/Context/Context';

import useServiceProducts from '../api/service/productsService';
import Header from '@/components/Header/Header';

const Details = () => {
    const router = useRouter();
    const { id } = router.query;
    const productId = typeof id === 'string' ? id : '';
    const { total, cart, setTotal, item, setItem } = useContext(Context);
//const [item, setItem] = useState<TItem>({id: '', name: '', src: '', value: 0, quantity: 0, subTotal: 0});
const [unity, setUnity] = useState(0);
const {newItem, quantityInCart } = useProducts();
const {
    product, 
    loading, 
    error
} = useServiceProducts().getAllProductsById(productId);
const { id: IDProduct, name, url_image, value, description } = product;

console.log(product);

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
        url_image: url_image,
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
        url_image: url_image,
        value: value,
        quantity: unity -1,
        subTotal: value * (unity -1)
    });
    } else {
        return;
    }
}

  return (
    <>
    <Header />
    {loading ? (<></>):(<div className={styles.Product}>
        <div className={styles.descriptionImg}>
            <img style={{height:'100%', width:'100%'}} src={`${url_image}`} alt={name} />
        </div>
        <div className={styles.descriptionTxt}>
            <p className={styles.name}>{name}</p>
            <p className={styles.description}>{description}</p>
            <div className={styles.productShop}>
                <HiCurrencyDollar className='cardIcon' />
                <p>{value}</p>
                < BsFillCartPlusFill className='addProduct' onClick={() => addInCart()} />
                <p>{quantityInCart(IDProduct)}</p>
                <BsFillCartDashFill className='removeProduct' onClick={() => removeOfCart()}/>
            </div>
        </div>
    </div>)}
    </>
  );
};

export default Details;