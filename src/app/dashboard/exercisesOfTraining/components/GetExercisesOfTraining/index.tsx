"use client"

import styles from './styles.module.scss'
import { useExercisesOfTrainingContext } from '../../context/useExercisesOfTrainingContext'
import { ExercisesOfTrainingModel } from '../../../../models/ExercisesOfTrainingModel';
import { ExercisesOfTrainingActionTypes } from '../../context/ExercisesOfTrainingActions';
import { PlusCircleIcon } from 'lucide-react';
import {useState} from 'react'
import { ExerciseModel } from '@/app/models/ExerciseModel';
import { api } from '@/services/api';



export function GetExercisesOfTrainingsOfTraining(){

    const {state,dispatch} = useExercisesOfTrainingContext();
    const exercisesoftraining = state.exercisesoftrainingModal;
    const token = state.token;
    const [block, setBlock] = useState(exercisesoftraining != null? (exercisesoftraining.block) : 0);
    const [repeat, setRepeat] = useState(exercisesoftraining != null? (exercisesoftraining.repeat) : 0);

    async function getExercises (){
      const responseExercise = await api.get("/exercise",{
        headers:{
              Authorization: `Bearer ${token}`
            }
       })
      const simplifiedExercises = responseExercise.data.map((exercise: ExerciseModel) => ({
        id_exercise: exercise.id_exercise,
        name_exercise: exercise.name_exercise,
      }));     
      console.log("Simplified Exercises",{simplifiedExercises})
      return simplifiedExercises; 
    }

    async function handleDetailExercisesOfTraining(exercisesoftraining:ExercisesOfTrainingModel){
        const exercises = await getExercises();
        console.log("exercises",{exercises})
        dispatch({type:ExercisesOfTrainingActionTypes.REQUEST_OPEN_MODAL, payload:{
          exercisesOfTraining: exercisesoftraining,
          exercises: exercises,
        }
      });
    }
    async function handleDetailExercisesOfTrainingCreate(){
        const exercises = await getExercises();
        dispatch({type:ExercisesOfTrainingActionTypes.REQUEST_OPEN_MODAL_CREATE, payload:exercises });
    }
  //            
    return(
    <section className={styles.container}>
      <h1>{state.exercisesoftraining[0].training.name_training}</h1>
      <button className={styles.buttonAdd} onClick={()=>handleDetailExercisesOfTrainingCreate()}><PlusCircleIcon className={styles.add}/></button>
      <div className={styles.exercisesoftrainingsoftraining}>
      {state.exercisesoftraining.map((item,index) =>(
        <button className={styles.blockExercises} key={item.id_exerciseoftraining} onClick={()=>handleDetailExercisesOfTraining(item)}>
             <h2 className={styles.nameExercise}>{item.exercise.name_exercise}</h2>
             <h2>Séries:  {item.block}  </h2>

             <h2>Repetições: {item.repeat} </h2>

             <h2>Observação: {item.description} </h2>


             
        </button>
       ))}
       </div>
    </section>
    )
}

