"use client"
import styles from './styles.module.scss'
import { FormExercice } from '../FormExercice';
import { GetExercises } from '../GetExercicios';
import { ModalExercise } from '../ModalExercise';
import { useExerciseContext } from '../../context/useExerciseContext';


export function PageExercise(){
    const {state, dispatch} = useExerciseContext();
    return(
         <main className={styles.container}>
                    <FormExercice/>
                    <GetExercises/>
                    {state.modalIsOpen && <ModalExercise/>}
        </main>
        
   ) 
}