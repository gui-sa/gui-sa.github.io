"use client"

import SectionDivided from '@/components/sections/SectionDivided';
import styles from './page.module.css'
import Navigator from '@/components/sections/Navigator/Navigator';

export default function Home() {
  return (
    <main className={styles.main}>
        <Navigator navList={0}/>
        <SectionDivided/>
    </main>
  );
}
