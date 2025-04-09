"use client"
import styles from './styles.module.scss'
import { TextArea } from '../../../../components/TextArea'
import { Input } from '../../../../components/Input'
import { useExerciseContext } from '../../context/useExerciseContext'
import { ExerciseActionTypes } from '../../context/ExerciseActions'
import { ExerciseModel } from '@/app/models/ExerciseModel'




export function FormExercice(){
    const {state, dispatch} = useExerciseContext();

 /*   const token = state.token;
     function handleRegisterExercise(formData: FormData){
        const name = formData.get("name");
        const description = formData.get("description");

        if(name==="" || description ==="" || !name || !description){
            return;
        }

        const newExercise: ExerciseModel = {
            id_exercise:"",
            name_exercise: name.toString(),
            description_exercise: description.toString(),
            created_at:Date.now(),
            update_at:Date.now(),
        };
        console.log(newExercise);
        api.post("/exercise",newExercise,{
            headers:{
                Authorization: `Bearer ${token}`
              }
        }).then(response =>{
            const {data}=response;
            newExercise.id_exercise=data.id_exercise;
        })     
        .then(()=>{
            dispatch({type:ExerciseActionTypes.CREATE_EXERCISE, payload:newExercise});
        }).catch((err)=>{
            console.log(err);
        })       
    }*/
    async function handleDetailExercise(){
        dispatch({type:ExerciseActionTypes.REQUEST_OPEN_MODAL_CREATE});
    }
  
    return(
       <main className={styles.container}>
        <h1>Cadastro de Exercício</h1>
         <form className={styles.form}>
            <Input type="text" name="name" placeholder="Nome do Exercício"/>
            <TextArea name="description" placeholder="Escreva a Descrição"/>
            <button onClick={()=>handleDetailExercise()}>Cadastrar</button>
         </form>
         <h1>Exercicíos Cadastrados</h1>
       </main>
       
    )
}