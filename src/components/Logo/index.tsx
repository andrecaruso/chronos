import styles from './styles.module.css';
import { Timer, TimerIcon } from "lucide-react";



export function Logo(){
    return (<div className={styles.logo}>
        <a href='#' className={styles.logoLink}>
            <TimerIcon />Chronos
        </a>
    </div>);
};