import styles from './index.module.css'

export default function Footer(){

    return(
        <footer className={styles.main}>
            <p>Design e desenvolvimento do portifolio por autoria propria (inclusive as imagens)</p>
            <a className={styles.anchor} href="mailto:guime.sa9@gmail.com">E-mail: guime.sa9@gmail.com</a>
            <a className={styles.anchor} href="tel:+5517996095939">Contato: (17) 9 9609 5939</a>
        </footer>
    );

}