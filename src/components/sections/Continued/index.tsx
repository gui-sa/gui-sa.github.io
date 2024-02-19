import styles from './index.module.css'
import Image from 'next/image';
import Foguete from '../../../../public/Foguete.svg'

export default function SectionCentered(){

    return(
        <section className={styles.main}>
            <h2 className={styles.title}>Em construção</h2>
            <p className={styles.message}>
                Futuramente vou colocar diferentes amostras de projetos e fragmentos de conhecimentos aqui.
            </p>
            <div className={styles.img}>
                <Image
                    src={Foguete}
                    alt="Construindo um Foguete"
                    sizes='50vw'
                    style={{width:'100%', height:'auto',aspectRatio: '1/1'}}

                />
            </div>
            <div className={styles.design}></div>
        </section>
    );

}