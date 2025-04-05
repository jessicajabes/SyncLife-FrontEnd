import styles from "../page.module.scss";
import logoImg from '../../../public/Logo.png'
import Image from 'next/image'
import Link from "next/link";
import {api} from '@/services/api'
import { redirect } from "next/navigation";
import {Logo} from '../components/Logo'
import {Button} from '../components/Button'
import { Input } from '../components/Input'

export default function Signup(){

  async function handleRegister(formData: FormData){
   "use server"
    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")

    if (name ==="" || email === "" || password ===""){
      return;
    }

    try{
      await api.post("/users",{
        name_user: name,
        password,
        email,
        teacher:true
      })

    }catch(err){
      console.log("error")
      console.log(err)
    }

    redirect ("/")
  }


    return(
        <div className={styles.containerCenter}>
        <Link href="/" className={styles.logoLink}><Logo/></Link>
        <section className={styles.Login}>
          <h1>Faça seu cadastro</h1>  
          <form action={handleRegister}>
            <Input type="text" name="name" placeholder="Digite seu nome..."/>
            <Input type="email" name="email" placeholder="Digite seu email..." />
            <Input type="password" name="password" placeholder="Digite sua senha..."/>
            <Button>Cadastrar</Button>
          </form>
          <Link href="/" className={styles.text}>
          Já possui uma conta? Faça o login
          </Link>
        </section>
        </div>  
 
    )
}