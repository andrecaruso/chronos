import styles from './styles.module.css';
import { HistoryIcon, HouseIcon, MoonIcon, Network, Settings, SettingsIcon, SunIcon, TimerIcon } from "lucide-react";
import { useState, useEffect } from 'react';

type availableThemes = 'dark' | 'light';
let icone = <SunIcon />

export function Menu(){
    const [theme, setTheme] = useState<availableThemes>('dark');

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
        event.preventDefault();
       // console.log('Click', Date.now());

        setTheme(prevTheme => {
           const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
           return nextTheme;
        });
    }

   //sem dependencias
   //executado toda vez que alguma coisa no componente
   //muda, o useEffect sem dependencias é executado
   /* useEffect(()=>{
   })
   */

    //com array de dependencias vazio       
    //executa qdo o react monta o componente na tela a primeira vez!
    /*  useEffect(() => {
        console.log('useEffect com [] dependencias vazio',Date.now());
    },[]); */

    //com array de dependencias preenchido
    //executa qdo theme mudou
  
    useEffect(() => {
        console.log('Theme mudou ', theme , Date.now());
        document.documentElement.setAttribute('data-theme', theme);
       if (theme === 'dark')
            icone = <MoonIcon />
        else 
            icone = <SunIcon />
    },[theme]);


    return (<nav className={styles.menu}>
        {theme}
        <a href='#' className={styles.menuLink} aria-label='home' title='home'>
            <HouseIcon />
        </a>
         <a href='#' className={styles.menuLink} aria-label='histórico' title='histórico'>
            <HistoryIcon />
        </a>
         <a href='#' className={styles.menuLink} aria-label='settings' title='settings'>
            <SettingsIcon />
        </a>
         <a href='#' className={styles.menuLink} aria-label='tema' title='tema' onClick={handleThemeChange}>
             {icone}
        </a>
    </nav>);
};