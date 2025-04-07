"use client"
import styles from './styles.module.scss'
import { useExerciseContext } from '../../context/useExerciseContext';
import { X } from 'lucide-react'
import { Input } from '@/app/components/Input';
import { ExerciseModel } from '@/app/models/ExerciseModel';
import { api } from '@/services/api';


export function ModalExercise(){
    const {state,dispatch} = useExerciseContext();
    const exercise = state.exerciseModal;
    const token = state.token;



    async function handleDeleteExercise(exercise: ExerciseModel){
        console.log(exercise);
        console.log(token);
        console.log(exercise?.id_exercise);
    await api.delete("/exercise",{
                headers:{
                    Authorization: `Bearer ${token}`
                  },
                params:{
                    id_exercise: exercise.id_exercise

                }
            }).catch((err)=>{
                console.log(err);

            })     
    }

    return(
        <>
       {exercise &&( 
        <dialog className={styles.dialogContainer}>
            <section className={styles.dialogContent}>
            <button className={styles.dialogBack} >
                 <X className={styles.X} />
            </button>
                <h1>Exercicío:</h1>
                <input value={exercise.name_exercise}/>
                <h1>Descrição:</h1>
                <input value={exercise.description_exercise}/>
            <button>alterar</button>
            <button onClick={()=>handleDeleteExercise(exercise)}>deletar</button>
            </section>
        </dialog>
      )
    }
    </>
    )
}