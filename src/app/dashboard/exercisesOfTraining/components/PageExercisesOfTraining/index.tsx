"use client"
import styles from './styles.module.scss'
import { GetExercisesOfTrainingsOfTraining } from '../GetExercisesOfTraining';
import { ModalExercisesOfTraining } from '../ModalExercisesOfTraining';
import { useExercisesOfTrainingContext } from '../../context/useExercisesOfTrainingContext';


export function PageExercisesOfTraining(){
    const {state, dispatch} = useExercisesOfTrainingContext();
    return(
         <main className={styles.container}>
                 
                    <GetExercisesOfTrainingsOfTraining/>
                    {state.modalIsOpen && <ModalExercisesOfTraining/>}
        </main>
        
   ) 
}