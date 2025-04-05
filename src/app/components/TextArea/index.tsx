import styles from './styles.module.scss'

interface PropsTextArea{
    name: string;
    placeholder?: string;
}

export function TextArea({name, placeholder}: PropsTextArea){
    return(
        <>
          <textarea name={name} placeholder={placeholder} className={styles.textarea}/>
        </>
    )
}