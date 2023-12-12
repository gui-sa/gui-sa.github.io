import Button from '@/components/Button';
import styles from './index.module.css'
import Image from 'next/image';
import BlackHole from '../../../../public/black_hole.svg'

export default function SectionDivided(){

    return(
        <div className={styles.main}>
            <div className={styles.text}>
                <h1 className={styles.title}>Desenvolvimento de Sites e Sistemas</h1>
                <p className={styles.paragraph}>
                    No vasto cosmos do mercado, assim como o universo em constante expansão, as oportunidades também se estendem além dos limites do que podemos ver.
                </p>
                <p className={styles.paragraph}>
                    Posso de ajudar a construir seu projeto, produto e ideia:
                </p>
                <div className={styles.button}>
                    <Button usage='cta'>
                        Quero começar a minha jornada pelos cosmos!
                    </Button>
                </div>
            </div>
            <div className={styles.img}>
                <Image
                    src={BlackHole}
                    alt="Black hole"
                    sizes='50vw'
                    style={{width:'100%', height:'auto',aspectRatio: '1/1'}}
                />
            </div>
        </div>
    );

}