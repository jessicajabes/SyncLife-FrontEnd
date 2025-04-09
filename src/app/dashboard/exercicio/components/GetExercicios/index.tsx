"use client"

import styles from './styles.module.scss'
import { useExerciseContext } from '../../context/useExerciseContext'
import { ExerciseModel } from '../../../../models/ExerciseModel';
import { ExerciseActionTypes } from '../../context/ExerciseActions';
import { PlusCircleIcon } from 'lucide-react';






export function GetExercises(){

    const {state,dispatch} = useExerciseContext();

    async function handleDetailExercise(exercise:ExerciseModel){
        console.log(exercise);
        dispatch({type:ExerciseActionTypes.REQUEST_OPEN_MODAL, payload:exercise});
    }
    async function handleDetailExerciseCreate(){
        dispatch({type:ExerciseActionTypes.REQUEST_OPEN_MODAL_CREATE});
    }
  //            
    return(
    <section className={styles.container}>
      <h1>EXERCÍCIOS</h1>
      <button className={styles.buttonAdd} onClick={()=>handleDetailExerciseCreate()}><PlusCircleIcon className={styles.add}/></button>
      <div className={styles.exercises}>
      {state.exercises.map((item,index) =>(
        <button key={item.id_exercise} className={styles.section} onClick={()=>handleDetailExercise(item)}>
              <div className={styles.tag}/>
              <span>{item.name_exercise}</span>
        </button>
       ))}
       </div>
    </section>
    )
}

