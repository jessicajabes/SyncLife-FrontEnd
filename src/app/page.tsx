import styles from "./page.module.scss";
import logoImg from '../../public/Logo.png'
import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.containerCenter}>
      <Image 
        src={logoImg}
        alt="Logo SyncLife"
        className={styles.Image}
      />
      <section className={styles.Login}>
        <form>
          <input type="email" required name="email" placeholder="Digite seu email..." className={styles.input}/>
          <input type="password" required name="password" placeholder="Digite sua senha..." className={styles.input}/>
       
          <button type="submit">
            Acessar
          </button>
        </form>
        <Link href="signup" className={styles.text}>
          Não possui uma conta? Cadastra-se
        </Link>
      </section>
    </div>  
  );
}
