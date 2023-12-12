import Button from '@/components/Button';
import styles from './index.module.css'
import Image from 'next/image';
import BlackHole from '../../../../public/black_hole.svg'
import Link from 'next/link';

export default function SectionDivided(){

    return(
        <section className={styles.main}>
            <div className={styles.text}>
                <h1 className={styles.title}>Desenvolvimento de Sites e Sistemas</h1>
                <p className={styles.paragraph}>
                    No vasto cosmos do mercado, assim como o universo em constante expansão, as oportunidades também se estendem além dos limites do que podemos ver.
                </p>
                <p className={styles.paragraph}>
                    Posso de ajudar a construir seu projeto, produto e ideia:
                </p>
                <div className={styles.button}>
                    <Link target="_blank" href="https://wa.me/+5517996095939?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20minha%20ideia%20do%20papel%21">
                        <Button usage='cta'>
                            Quero começar a minha jornada pelos cosmos!
                        </Button>
                    </Link>
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
        </section>
    );

}