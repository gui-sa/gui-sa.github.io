import styles from './navigator.module.css'
import Button from '../../Button'
import Logo from '@/components/Logo';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import Link from 'next/link';


type navigatorProp={
    navList: 0 | 1 | 2 
}

export default function Navigator({navList}:navigatorProp){
    const router = useRouter();
    const [text,setText] = useState("SalomãoBot")
    const [dropDown,setDropDown] = useState(false);

    return(
        <div 
            className={dropDown?styles.main_active:styles.main_default}
            onMouseEnter={()=>{setText("Guilherme Salomão Agostini")}}
            onMouseLeave={()=>{setText("SalomãoBot");setDropDown(false)}}
            onClick={()=>{setDropDown(true)}}
        >
            <Logo>
            {text}
            </Logo>

            <div className={dropDown?styles.nav_items_active:styles.nav_items_default}>
                <Button onClick={()=>{router.push('/')}} usage='nav' status={(navList===0)}> 
                    Casa
                </Button>
                <Button onClick={()=>{router.push('/multiverso')}} usage='nav' status={(navList===1)}> 
                    Multiverso
                </Button>
                <Button onClick={()=>{router.push('/artigos')}} usage='nav' status={(navList===2)}> 
                    Artigos
                </Button>
            </div>
            <div className={dropDown?"":styles.hidden }>
                <Link target="_blank" href="https://wa.me/+5517996095939?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20minha%20ideia%20do%20papel%21">
                    <Button>
                        Vamos Conversar!
                    </Button>
                </Link>
            </div>
        </div>
    );

}