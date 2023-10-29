import React from 'react';
import styles from '../../styles/banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}></div>
      <div className={styles.text}>Abelha Personalizados</div>
    </div>
  );
};

export default Banner;