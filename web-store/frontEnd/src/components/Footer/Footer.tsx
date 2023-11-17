import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from '../../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.slogan}>
        <img src="web-store/frontEnd/public/favicon.ico" alt="Logo da Loja" />
        <h2>Abelha Personalizados: Mais do que Produtos, Uma Experiência de Personalização Excepcional</h2>
      </div>
      <div className={styles.collum}>
      <nav className={styles.navigation}>
        <ul>
          <li><a href="/">My Account</a></li>
          <li><a href="/produtos">Home</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </nav>
      </div>
      <div className={styles.collum}>
        <h2 className={styles.headding}>Contatos</h2>
        <ul className={styles.contactInfo}>
          <li>
            <strong>Endereço:</strong> Rua da Abelha, 123, Holambra, São Paulo
          </li>
          <li>
            <strong>Telefone:</strong> (55) 1234-5678
          </li>
          <li>
            <strong>Email:</strong> contato@abelhapersonalizados.com
          </li>
        </ul>
        <ul className={styles.socialInfo}>
          <li><a href="https://facebook.com" target="_blank"><FaFacebook /> Abelha Personalizados</a></li>
          <li><a href="https://twitter.com" target="_blank" ><FaTwitter /></a>abelha_personalizados</li>
          <li><a href="https://instagram.com" target="_blank" ><FaInstagram />abelha_personalizados</a></li>
        </ul>
      </div>
      
    </footer>
  );
};

export default Footer;
