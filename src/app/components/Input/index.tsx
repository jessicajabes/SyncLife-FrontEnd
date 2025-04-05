import styles from './styles.module.scss'

type PropsInput={
    name: string;
} & React.ComponentProps<'input'>


export function Input({type, name, placeholder, ...rest}: PropsInput){
    return(
        <>
            <input type={type} required name={name} placeholder={placeholder}  {...rest} className={styles.input}/>
        </>
    )
}