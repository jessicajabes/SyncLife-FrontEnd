"use client"

import styles from './styles.module.scss'
import Link from 'next/link';
import {LogOut, SunIcon, MoonIcon} from 'lucide-react'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import {Logo} from '../../../components/Logo'
import { useState, useEffect } from 'react';

export function Header(){
    const router = useRouter();
    const [theme, setTheme] = useState<'dark'|'light'>('dark');

    const nextIconTheme ={
        dark: <SunIcon size={24} className={styles.sun}/>,
        light: <MoonIcon size={24} className={styles.sun}/>,
    }


    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event?.preventDefault();
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            localStorage.setItem("theme", nextTheme);
            return nextTheme;
        });
    }

    async function handleLogout(){
      deleteCookie("session", { path: "/" } )      
      router.replace("/")
    }

    useEffect(()=>{
        const storageTheme = (localStorage.getItem("theme") as "dark"|"light") || 'dark';
        document.documentElement.setAttribute('data-theme', storageTheme);
        localStorage.setItem('theme', storageTheme);
        setTheme(storageTheme);
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
                    <Link href="/dashboard/training">Treino</Link>
                    <Link href="/dashboard/exercicio">Exercicíos</Link>
                    <Link href="#" onClick={handleThemeChange}> {nextIconTheme[theme]}</Link>
                    <form action={handleLogout}>
                        <button type='submit'><LogOut size={24} className={styles.logout}></LogOut></button>
                    </form>
                </nav>
             </div>
        </header>
    )

}