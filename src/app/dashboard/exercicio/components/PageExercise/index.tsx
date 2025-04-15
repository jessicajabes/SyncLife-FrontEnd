"use client"
import styles from './styles.module.scss'
import { GetExercises } from '../GetExercises';
import { ModalExercise } from '../ModalExercise';
import { useExerciseContext } from '../../context/useExerciseContext';


export function PageExercise(){
    const {state, dispatch} = useExerciseContext();
    return(
         <main className={styles.container}>
                 
                    <GetExercises/>
                    {state.modalIsOpen && <ModalExercise/>}
        </main>
        
   ) 
}