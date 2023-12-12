"use client"

import styles from './page.module.css'
import Navigator from '@/components/sections/Navigator/Navigator';

export default function Home() {
  return (
    <main className={styles.main}>
        <Navigator navList={0}/>
    </main>
  );
}
