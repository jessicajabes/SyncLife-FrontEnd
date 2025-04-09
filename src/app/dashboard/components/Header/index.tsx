"use client"

import styles from './styles.module.scss'
import Link from 'next/link';
import {LogOut, SunIcon} from 'lucide-react'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import {Logo} from '../../../components/Logo'
import { useState, useEffect } from 'react';

export function Header(){
    const router = useRouter();
    const [theme, setTheme] = useState<'dark'|'light'>('dark');

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,

    ){
        event?.preventDefault();

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    }

    async function handleLogout(){
      deleteCookie("session", { path: "/" } )      
      router.replace("/")
    }

    useEffect(()=>{
        document.documentElement.setAttribute('data-theme', theme);
        
        return () =>{
            console.log("Atualizando componente")
        }
    }, [theme]);

    return(
        <header className={styles.headerContainer}>
             <div className={styles.headerContent}>
                <Link href="/dashboard">
                    <Logo/>
                </Link>
                <nav>   
                    <Link href="/dashboard">Treino</Link>
                    <Link href="/dashboard/exercicio">Exercicíos</Link>
                    <Link href="#" onClick={handleThemeChange}> <SunIcon size={24} className={styles.sun}/></Link>
                    <form action={handleLogout}>
                        <button type='submit'><LogOut size={24} className={styles.logout} /></button>
                    </form>
                </nav>
             </div>
        </header>
    )

}