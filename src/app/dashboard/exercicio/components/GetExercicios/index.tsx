"use client"

import styles from './styles.module.scss'
import { useExerciseContext } from '../../context/useExerciseContext'
import { ExerciseModel } from '@/app/models/ExerciseModel';
import { ExerciseActionTypes } from '../../context/ExerciseActions';




export interface ExerciceProps{
    id_exercise: string;
    name_exercise: string;
    description_exercise: string;
}

interface Props{
    exercises: ExerciceProps[]
}

export function GetExercises(){

    const {state,dispatch} = useExerciseContext();

    async function handleDetailExercise(exercise:ExerciseModel){
        dispatch({type:ExerciseActionTypes.REQUEST_OPEN_MODAL, payload:exercise});
    }
  
    return(
        
       state.exercises.map((item) =>(
        <button key={item.id_exercise} className={styles.section} onClick={()=>handleDetailExercise(item)}>
              <div className={styles.tag}/>
              <span>{item.name_exercise}</span>
        </button>
       ))

       )
}

