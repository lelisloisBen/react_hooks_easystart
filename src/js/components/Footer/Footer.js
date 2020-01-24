import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
      <footer className={styles.footer}>
         <div className="container text-center">
            Simple Footer that stick at the bottom, Made By <a href="https://github.com/samirbenzada">Samir Benzada</a> 
         </div>
      </footer>
    );
};

export default Footer;