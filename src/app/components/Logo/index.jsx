import {Wifi} from 'lucide-react'
import {Activity} from 'lucide-react'
import styles from './styles.module.scss'

export function Logo(){
    return(
        <div className={styles.logo}>SyncLife <Activity className={styles.activity}/><Wifi className={styles.wifi} /></div>             
    )
}