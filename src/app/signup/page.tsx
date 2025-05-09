import styles from "../page.module.scss";
import Image from 'next/image'
import Link from "next/link";
import {api} from '@/services/api'
import { redirect } from "next/navigation";
import {Logo} from '../components/Logo'
import {Button} from '../components/Button'
import { Input } from '../components/Input'
import { toast } from 'sonner';
import { Exception } from "sass";

export default function Signup(){

  async function handleRegister(formData: FormData){

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (name ==="" || email === "" || password ===""){
      toast.error("Por favor, preencha todos os campos.")
      return;
    }

    try{
      await api.post("/users",{
        name_user: name,
        password,
        email,
        teacher:true
      });
      toast.success("Usuário cadastrado com sucesso!");
      redirect ("/");
    }
    catch(e){
      toast.error("Erro ao cadastrar usuário");
      console.log(e);
    }; 
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
