"use client"

import styles from './page.module.css'
import Navigator from '@/components/sections/Navigator/Navigator';
import Continued from '@/components/sections/Continued'

export default function Multiverso() {
  return (
    <main className={styles.main}>
        <Navigator navList={1}/>
        <Continued/>
    </main>
  );
}