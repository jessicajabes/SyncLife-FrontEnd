"use client"
import styles from './styles.module.scss'
import { useExercisesOfTrainingContext } from '../../context/useExercisesOfTrainingContext';
import { X } from 'lucide-react'
import { ExercisesOfTrainingModel } from '@/app/models/ExercisesOfTrainingModel';
import { api } from '../../../../../services/api';
import { ExercisesOfTrainingActionTypes } from '../../context/ExercisesOfTrainingActions';
import {useState} from 'react'
import { toast } from 'sonner';


export function ModalExercisesOfTraining(){
    const {state,dispatch} = useExercisesOfTrainingContext();
    const exercisesoftraining = state.exercisesoftrainingModal;
    const token = state.token;
    const [block, setBlock] = useState(exercisesoftraining != null? (exercisesoftraining.block) : 0);
    const [repeat, setRepeat] = useState(exercisesoftraining != null? (exercisesoftraining.repeat) : 0);


    function handleCloseModal(){
        dispatch({type: ExercisesOfTrainingActionTypes.CLOSE_MODAL});
    }


   /* async function handleDeleteExercisesOfTraining(exercisesoftraining: ExercisesOfTrainingModel){
    await api.delete("/exercisesoftraining",{
                headers:{
                    Authorization: `Bearer ${token}`
                  },
                params:{
                    id_exercisesoftraining: exercisesoftraining.id_exerciseoftraining
                }
            })     
            .then(()=>{
                dispatch({type:ExercisesOfTrainingActionTypes.DELETE_EXERCISESOFTRAINING, payload:exercisesoftraining});
            }).then(()=>{
                toast.success("Exercício deletado com sucesso!");
            }).catch((err)=>{
                toast.error("Erro ao deletar exercício");
                console.log(err);
            })     
        }

      */
  
  /*  async function handlePutExercisesOfTraining(exercisesoftraining: ExercisesOfTrainingModel){
        console.log("handle",name_exercisesoftraining,setName_exercisesoftraining);
        if((name_exercisesoftraining && description_exercisesoftraining)){
            const putExercisesOfTraining: ExercisesOfTrainingModel = {
                id_exerciseoftraining:exercisesoftraining.id_exerciseoftraining,
                name_exercisesoftraining: name_exercisesoftraining,
                description_exercisesoftraining: description_exercisesoftraining,
                created_at:exercisesoftraining.created_at,
                update_at:Date.now(),
            };
            console.log("PUT EXERCISESOFTRAINING",putExercisesOfTraining)
            await api.put("/exercisesoftraining", putExercisesOfTraining, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })     
            .then(()=>{
                dispatch({type:ExercisesOfTrainingActionTypes.PUT_EXERCISESOFTRAINING, payload:putExercisesOfTraining});
            }).then(()=>{
                toast.success("Exercício alterado com sucesso!");
            }).catch((err)=>{
                toast.error("Erro ao alterar exercício");
                console.log(err);
            }) 
        }     
    }*/

   /* async function handleCreateExercisesOfTraining(){
        if(name_exercisesoftraining==="" || description_exercisesoftraining ==="" || !name_exercisesoftraining || !description_exercisesoftraining){
            return;
        }

        const newExercisesOfTraining: ExercisesOfTrainingModel = {
            id_exercisesoftraining:"",
            name_exercisesoftraining: name_exercisesoftraining,
            description_exercisesoftraining: description_exercisesoftraining,
            created_at:Date.now(),
            update_at:Date.now(),
        };
        console.log(newExercisesOfTraining);
        api.post("/exercisesoftraining",newExercisesOfTraining,{
            headers:{
                Authorization: `Bearer ${token}`
              }
        }).then(response =>{
            const {data}=response;
            newExercisesOfTraining.id_exercisesoftraining=data.id_exercisesoftraining;
        })     
        .then(()=>{
            dispatch({type:ExercisesOfTrainingActionTypes.CREATE_EXERCISESOFTRAINING, payload:newExercisesOfTraining});
        }).then(()=>{
            toast.success("Exercício criado com sucesso!");
        }).catch((err)=>{
            toast.error("Erro ao criar exercício");
            console.log(err);
        })       
    }
    */

    return(
        <>

        <dialog className={styles.dialogContainer}>
            <section className={styles.dialogContent}>
                <div className={styles.buttonClose}>
                    <button onClick={()=>handleCloseModal()} className={styles.dialogBack} >
                        <X className={styles.X} />
                    </button>
                </div>
                <form>
                    <h1>Exercicío:</h1>
                    <input type='text' value={name_exercisesoftraining} onChange={(e)=>setName_exercisesoftraining(e.target.value)}/>
                    <h1>Descrição:</h1>
                    <textarea  value={description_exercisesoftraining} onChange={(e)=>setDescription_exercisesoftraining(e.target.value)}/>
                </form>
                {(exercisesoftraining !== null) ?( 
                <div className={styles.divButtons}>
                    <button onClick={()=>handlePutExercisesOfTraining(exercisesoftraining)}>Alterar</button>
                    <button onClick={()=>handleDeleteExercisesOfTraining(exercisesoftraining)}>Deletar</button>
                </div>
                 ):(
                <div className={styles.divButtons}>
                        <button onClick={()=>handleCreateExercisesOfTraining()}>Cadastrar</button>
                </div>

                 )}
            </section>
        </dialog>
    

    </>
    )
}