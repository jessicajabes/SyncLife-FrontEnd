"use client"
import styles from './styles.module.scss'
import { useExerciseContext } from '../../context/useExerciseContext';
import { X } from 'lucide-react'
import { ExerciseModel } from '@/app/models/ExerciseModel';
import { api } from '../../../../../services/api';
import { ExerciseActionTypes } from '../../context/ExerciseActions';
import {useState} from 'react'
import { toast } from 'sonner';


export function ModalExercise(){
    const {state,dispatch} = useExerciseContext();
    const exercise = state.exerciseModal;
    const token = state.token;
    const [name_exercise, setName_exercise] = useState(exercise != null? (exercise.name_exercise) : "");
    const [description_exercise, setDescription_exercise] = useState(exercise != null? (exercise.description_exercise) : "");


    function handleCloseModal(){
        dispatch({type: ExerciseActionTypes.CLOSE_MODAL});
    }


    async function handleDeleteExercise(exercise: ExerciseModel){
    await api.delete("/exercise",{
                headers:{
                    Authorization: `Bearer ${token}`
                  },
                params:{
                    id_exercise: exercise.id_exercise
                }
            })     
            .then(()=>{
                dispatch({type:ExerciseActionTypes.DELETE_EXERCISE, payload:exercise});
            }).then(()=>{
                toast.success("Exercício deletado com sucesso!");
            }).catch((err)=>{
                toast.error("Erro ao deletar exercício");
                console.log(err);
            })     
        }

      
  
    async function handlePutExercise(exercise: ExerciseModel){
        console.log("handle",name_exercise,setName_exercise);
        if((name_exercise && description_exercise)){
            const putExercise: ExerciseModel = {
                id_exercise:exercise.id_exercise,
                name_exercise: name_exercise,
                description_exercise: description_exercise,
                created_at:exercise.created_at,
                update_at:Date.now(),
            };
            console.log("PUT EXERCISE",putExercise)
            await api.put("/exercise", putExercise, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })     
            .then(()=>{
                dispatch({type:ExerciseActionTypes.PUT_EXERCISE, payload:putExercise});
            }).then(()=>{
                toast.success("Exercício alterado com sucesso!");
            }).catch((err)=>{
                toast.error("Erro ao alterar exercício");
                console.log(err);
            }) 
        }     
    }

    async function handleCreateExercise(){
        if(name_exercise==="" || description_exercise ==="" || !name_exercise || !description_exercise){
            return;
        }

        const newExercise: ExerciseModel = {
            id_exercise:"",
            name_exercise: name_exercise,
            description_exercise: description_exercise,
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
        }).then(()=>{
            toast.success("Exercício criado com sucesso!");
        }).catch((err)=>{
            toast.error("Erro ao criar exercício");
            console.log(err);
        })       
    }
    

    return(
        <>

        <dialog className={styles.dialogContainer}>
            <section className={styles.dialogContent}>
                <div className={styles.buttonClose}>
                    <button onClick={()=>handleCloseModal()} className={styles.dialogBack} >
                        <X className={styles.X} />
                    </button>
                </div>
                <form>
                    <h1>Exercicío:</h1>
                    <input type='text' value={name_exercise} onChange={(e)=>setName_exercise(e.target.value)}/>
                    <h1>Descrição:</h1>
                    <textarea  value={description_exercise} onChange={(e)=>setDescription_exercise(e.target.value)}/>
                </form>
                {(exercise !== null) ?( 
                <div className={styles.divButtons}>
                    <button onClick={()=>handlePutExercise(exercise)}>Alterar</button>
                    <button onClick={()=>handleDeleteExercise(exercise)}>Deletar</button>
                </div>
                 ):(
                <div className={styles.divButtons}>
                        <button onClick={()=>handleCreateExercise()}>Cadastrar</button>
                </div>

                 )}
            </section>
        </dialog>
    

    </>
    )
}