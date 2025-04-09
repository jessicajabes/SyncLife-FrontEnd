import styles from "./page.module.scss";
import Link from "next/link";
import {redirect} from 'next/navigation';
import { api } from "../services/api";
import { cookies } from 'next/headers'
import {Logo} from './components/Logo'
import { Button } from "./components/Button";
import { Input } from "./components/Input";


export default function Home() {

  async function handleLogin(formData: FormData){
    "use server"
    const email = formData.get("email")
    const password = formData.get("password")

    if(email === "" || password === ""){
      return;
    }

    try{
      const response = await api.post("/login", {email, password})
      if(!response.data.token){
        return;
      }
      console.log(response.data);

      const expressTime = 60 * 60 * 24 * 30 * 1000;
      const cookie = await cookies();
      cookie.set("session", response.data.token, {
        maxAge: expressTime,
        path: "/",
        httpOnly: false,
        secure: process.env.NODE_ENV === "production"
      })

    }catch(err){
      console.log(err);
      return;
    }

    redirect("/dashboard")

  }



  return (
    <div className={styles.containerCenter}>
      <Link href="/" className={styles.logoLink}><Logo/></Link>
      <section className={styles.Login}>
        <form action={handleLogin}>
          <Input type="email" name="email" placeholder="Digite seu email..."></Input>
          <Input type="password" name="password" placeholder="Digite sua senha..."></Input>
              <Button>Acessar</Button>
        </form>
        <Link href="signup" className={styles.text}>
          Não possui uma conta? Cadastra-se
        </Link>
      </section>
    </div>  
  );
}
