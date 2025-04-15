"use client"
import styles from './styles.module.scss'
import { GetTraining } from '../GetTraining';
import { Modaltraining } from '../ModalTraining';
import { useTrainingContext } from '../../context/useTrainingContext';


export function Pagetraining(){
    const {state, dispatch} = useTrainingContext();
    return(
         <main className={styles.container}>
                 
                    <GetTraining/>
                    {state.modalIsOpen && <Modaltraining/>}
        </main>
        
   ) 
}