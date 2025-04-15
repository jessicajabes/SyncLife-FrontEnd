"use client"

import styles from './styles.module.scss'
import { useExercisesOfTrainingContext } from '../../context/useExercisesOfTrainingContext'
import { ExercisesOfTrainingModel } from '../../../../models/ExercisesOfTrainingModel';
import { ExercisesOfTrainingActionTypes } from '../../context/ExercisesOfTrainingActions';
import { PlusCircleIcon } from 'lucide-react';
import {useState} from 'react'



export function GetExercisesOfTrainingsOfTraining(){

    const {state,dispatch} = useExercisesOfTrainingContext();
    const exercisesoftraining = state.exercisesoftrainingModal;
    const token = state.token;
    const [block, setBlock] = useState(exercisesoftraining != null? (exercisesoftraining.block) : 0);
    const [repeat, setRepeat] = useState(exercisesoftraining != null? (exercisesoftraining.repeat) : 0);

    async function handleDetailExercisesOfTraining(exercisesoftraining:ExercisesOfTrainingModel){
        console.log(exercisesoftraining);
        dispatch({type:ExercisesOfTrainingActionTypes.REQUEST_OPEN_MODAL, payload:exercisesoftraining});
    }
    async function handleDetailExercisesOfTrainingCreate(){
        dispatch({type:ExercisesOfTrainingActionTypes.REQUEST_OPEN_MODAL_CREATE});
    }
  //            
    return(
    <section className={styles.container}>
      <h1>{state.exercisesoftraining[0].training.name_training}</h1>
      <button className={styles.buttonAdd} onClick={()=>handleDetailExercisesOfTrainingCreate()}><PlusCircleIcon className={styles.add}/></button>
      <div className={styles.exercisesoftrainingsoftraining}>
      {state.exercisesoftraining.map((item,index) =>(
        <div className={styles.blockExercises} key={item.id_exerciseoftraining}>
             <span className={styles.nameExercise}>{item.exercise.name_exercise}</span>
             <h1>Séries:    </h1>
             <input type='number' value={item.block} />
             <h1>Repetições: </h1>
             <input type='text' value={item.repeat} />
             <h1>Observação: </h1>
             <input type='text' value={item.description} />
             
        </div>
       ))}
       </div>
    </section>
    )
}

