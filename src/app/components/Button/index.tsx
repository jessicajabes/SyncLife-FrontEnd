import styles from './styles.module.scss'

interface ButtonProps {
    children: React.ReactNode;
}

export function Button({children}: ButtonProps){
    return(
        <button type="submit" className={styles.button}>{children}</button>
    )
}


