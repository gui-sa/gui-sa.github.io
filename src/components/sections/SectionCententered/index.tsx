import Button from '@/components/Button';
import styles from './index.module.css'
import Image from 'next/image';
import Foguete from '../../../../public/Foguete.svg'
import Link from 'next/link';

export default function SectionCentered(){

    return(
        <section className={styles.main}>
            <h2 className={styles.title}>Em qual tipo de aventura eu consigo te ajudar</h2>
            <p className={styles.paragraph_1}>
                Desenvolvimento de sites estáticos como Landing Pages, Portfolios e Repoitorios de arquivos
            </p>
            <div className={styles.img}>
                <Image
                    src={Foguete}
                    alt="Construindo um Foguete"
                    sizes='50vw'
                    style={{width:'100%', height:'auto',aspectRatio: '1/1'}}

                />
            </div>
            <p className={styles.paragraph_2}>
                Desenvolvimento de sistema dinâmicos para captação de clientes e dados chave, processamento e inteligência de negócio
            </p>
            <p className={styles.paragraph_3}>
                Qualquer outro sistema que a sua jornada pedir: sou um desenvolvedor de soluções
            </p>
            <Link target="_blank" href="https://wa.me/+5517996095939?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20minha%20ideia%20do%20papel%21">
                        <Button usage='cta'>
                            Quero começar a minha jornada pelos cosmos!
                        </Button>
            </Link>
        </section>
    );

}