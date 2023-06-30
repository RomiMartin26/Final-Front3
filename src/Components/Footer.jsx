import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.container}> 
            <p>Powered by</p>
            <div className={styles.logo}>
            <img src="/img/DH.png" width="300px" alt="Dh-logo" />
            </div>
            <div className={styles.icons}>
            <img src="/img/ico-facebook.png" width="20px" alt="Icono Facebook" />
            <img src="/img/ico-instagram.png" width="20px" alt="Icono Instagram" />
            <img src="/img/ico-tiktok.png" width="20px" alt="Icono Tiktok" />
            <img src="/img/ico-whatsapp.png" width="20px" alt="Icono" /> 
            </div>
        </footer>
    )
}
export default Footer