"use client"

import styles from './styles.module.scss'
import { useTrainingContext} from '../../context/useTrainingContext'
import { TrainingModel } from '../../../../models/TrainingModel';
import { TrainingActionTypes } from '../../context/TrainingActions';
import { PlusCircleIcon } from 'lucide-react';
import { PencilIcon } from 'lucide-react';
import { redirect } from 'next/navigation';






export function GetTraining(){

    const {state,dispatch} = useTrainingContext();

    async function handleDetailtraining(training:TrainingModel){
        console.log(training);
        dispatch({type:TrainingActionTypes.REQUEST_OPEN_MODAL, payload:training});
    }
    async function handleDetailtrainingCreate(){
        dispatch({type:TrainingActionTypes.REQUEST_OPEN_MODAL_CREATE});
    }

    function handleExercisesOfTraining(id_training:string){
              redirect(`/dashboard/exercisesOfTraining?training_id=${id_training}`)
    }
  //         <button className={styles.buttonPutDelete}><XIcon/></button>          
    return(
    <section className={styles.container}>
      <h1>TREINOS</h1>
      <button className={styles.buttonAdd} onClick={()=>handleDetailtrainingCreate()}><PlusCircleIcon className={styles.add}/></button>
      <div className={styles.grouptraining}>
      {state.training.map((item,index) =>(
        <div className={styles.training} key={item.id_training}>
        <button onClick={()=>handleExercisesOfTraining(item.id_training)} className={styles.section} >
              <div className={styles.tag}/>
              <span>{item.name_training}</span>
        </button>
         <button onClick={()=>handleDetailtraining(item)} className={styles.buttonPutDelete}><PencilIcon/></button>

        </div>
       ))}
       </div>
    </section>
    )
}

