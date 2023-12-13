import Button from '@/components/Button';
import styles from './index.module.css'
import Image from 'next/image';
import Nuvem from '../../../../public/Nuvem.png'
import Perfil from '../../../../public/Perfil.jpg'
import Link from 'next/link';

export default function Sobre(){

    return(
        <section className={styles.background}>
            <div className={styles.main}>
                <h2 className={styles.title}>Sobre mim</h2>
                <div className={styles.container}>
                    <div className={styles.paragraph}>
                        <p>
                            Escolhi a engenharia Mecatrônica e por isso tenho dominio amplo e diverso: comecei com programação com maior proximidade ao hardware (e ainda sou apaixonado pelas demais áreas do conhecimento) e ao longo do tempo me apaixonei pelo desenvolvimento WEB (meu xodó atual) e de jogos (tema para me aventurar no futuro).
                        </p>
                        <p className={styles.inter_paragraph}>
                        Nas horas vagas faço atividade fisica, cozinho, vejo anime, leio lightnovels, mexo nos bonsais, jogo, penso em negócios e viajo em astrofisica e astronomia (o tema deste portifolio)
                        </p>
                    </div>
                    <div className={styles.img_container}>
                        <div className={styles.border_img}>
                            <Image
                                src={Nuvem}
                                alt="Super Nova"
                                sizes='30vw'
                                style={{width:'100%', height:'auto'}}
                            />
                            <div className={styles.perfil}>
                                <Image
                                    src={Perfil}
                                    alt="Foto Guilherme Salomão Agostini"
                                    sizes='30vw'
                                    style={{width:'100%', height:'auto'}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}