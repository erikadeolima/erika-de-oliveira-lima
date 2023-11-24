import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from '../../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
      
      <div className={styles.area1}>
      <nav className={styles.navigation}>
        <a href="/">My Account</a>
          <a href="/produtos">Home</a>
          <a href="/cart">Cart</a>
      </nav>
      <div className={styles.slogan}>
        <img className={styles.logo} src="/logo.png" alt="Logo da Loja" />
        <h2>Abelha Personalizados: Mais do que Produtos, Uma Experiência de Personalização Excepcional</h2>
      </div>
      </div>
      <h2 className={styles.headding}>Contatos</h2>
      <div className={styles.area2}>
        
        <div className={styles.contactInfo}><><strong>Endereço:</strong> Rua da Abelha, 123, Holambra, São Paulo  </><><strong>Telefone:</strong> (55) 1234-5678   </><><strong>Email:</strong> contato@abelhapersonalizados.com</>
        </div>
        <div className={styles.socialInfo}>
          <a href="https://facebook.com" target="_blank"><FaFacebook /> Abelha Personalizados</a>
          <a href="https://twitter.com" target="_blank" ><FaTwitter /></a>abelha_personalizados
          <a href="https://instagram.com" target="_blank" ><FaInstagram />abelha_personalizados</a>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
