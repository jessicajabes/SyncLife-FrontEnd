import styles from './styles.module.scss'
import { getCookieServer } from '@/lib/cookieServer'
import { api } from '@/services/api'
import {redirect} from 'next/navigation'
import { useState } from 'react'
import {Button} from '../../../../components/Button'
import { TextArea } from '../../../../components/TextArea'
import { Input } from '@/app/components/Input'




export async function FormExercice(){


    async function handleRegisterExercise(formData: FormData){
        "use server"

        const name = formData.get("name");
        const description = formData.get("description");

        if(name==="" || description ===""){
            return
        }

        const data = {
            name_exercise:name,
            description_exercise:description,
        }

        console.log(name,description);

        const token = await getCookieServer();
        console.log(token);

        await api.post("/exercise",data,{
            headers:{
                Authorization: `Bearer ${token}`
              }
        })
        .catch((err)=>{
            console.log(err);
            return;
        }) 

      redirect("/dashboard/exercicio") 
   //  router.refresh();
    }
  
    return(
       <main className={styles.container}>
        <h1>Cadastro de Exercício</h1>
         <form className={styles.form} action={handleRegisterExercise}>
            <Input type="text" name="name" placeholder="Nome do Exercício"/>
            <TextArea name="description" placeholder="Escreva a Descrição"/>
            <Button>Cadastrar</Button>
         </form>
         <h1>Exercicíos Cadastrados</h1>
       </main>
       
    )
}