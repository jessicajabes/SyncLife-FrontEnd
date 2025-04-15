import styles from "./styles.module.scss";
import Link from "next/link";
import {redirect} from 'next/navigation';
import { api } from "@/services/api";
import { cookies } from 'next/headers'
import { Logo } from "../Logo";
import { Button } from "../Button";
import { Input } from "../Input";
import { toast } from 'sonner';
import { Exception } from "sass";



export default function Login() {

  async function handleLogin(formData: FormData){
    "use server"
    const email = formData.get("email")
    const password = formData.get("password")

    if(email === "" || password === ""){
      return;
    }


      await api.post("/login", {email, password}).then(
        async response =>{
          const expressTime = 60 * 60 * 24 * 30 * 1000;
          const cookie = await cookies();
          cookie.set("session", response.data.token, {
            maxAge: expressTime,
            path: "/",
            httpOnly: false,
            secure: process.env.NODE_ENV === "production"
            
          })

        }
      ).then(
        redirect("/dashboard")
      ).  catch((err: Exception)=>{
     // toast.error("Usuário ou senha inválidos");
      console.log(err);
    })


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
