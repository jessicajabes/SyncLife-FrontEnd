"use client"
import styles from './styles.module.scss'
import { useExercisesOfTrainingContext } from '../../context/useExercisesOfTrainingContext';
import { X } from 'lucide-react'
import { ExercisesOfTrainingModel } from '@/app/models/ExercisesOfTrainingModel';
import { api } from '../../../../../services/api';
import { ExercisesOfTrainingActionTypes } from '../../context/ExercisesOfTrainingActions';
import {useState, useEffect} from 'react'
import { toast } from 'sonner';
import { ExerciseModel } from '@/app/models/ExerciseModel';


export function ModalExercisesOfTraining(){
    const {state,dispatch} = useExercisesOfTrainingContext();
    const exercisesoftraining = state.exercisesoftrainingModal;
    const token = state.token;
    const [exercise_id, setExercise_Id] = useState("");
    const [exercise, setExercise] = useState([]);
    const [block, setBlock] = useState(exercisesoftraining != null? (exercisesoftraining.block) : 0);
    const [repeat, setRepeat] = useState(exercisesoftraining != null? (exercisesoftraining.repeat) : "");
    const [description, setDescription] = useState(exercisesoftraining != null? (exercisesoftraining.description) : "")
    
    


    useEffect(() => {
        if (exercisesoftraining?.exercise?.id_exercise && state.exercises.length > 0) {
          const matched = state.exercises.find(
            (item) => item.id_exercise === exercisesoftraining.exercise_id
          );
          if (matched) {
            setExercise_Id(String(matched.id_exercise));
            console.log("matched", matched)
           // setExercise(matched);
          }
        }
      }, [exercisesoftraining, state.exercises]);

    


    function handleCloseModal(){
        dispatch({type: ExercisesOfTrainingActionTypes.CLOSE_MODAL});
    }


    async function handleDeleteExercisesOfTraining(exercisesoftraining: ExercisesOfTrainingModel){
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

      
  
    async function handlePutExercisesOfTraining(exercisesoftraining: ExercisesOfTrainingModel){
        if((block && repeat)){
            const putExercisesOfTraining: ExercisesOfTrainingModel = {
                id_exerciseoftraining:exercisesoftraining.id_exerciseoftraining,
                block: block,
                exercise_id:exercisesoftraining.exercise_id,
                training_id:exercisesoftraining.training_id,
                repeat: repeat,
                description: exercisesoftraining.description,
                created_at:exercisesoftraining.created_at,
                update_at:Date.now(),
                training:exercisesoftraining.training,
                exercise:exercisesoftraining.exercise,
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
    }

    async function handleCreateExercisesOfTraining(){
        if(exercise_id==="" || repeat ==="" || block ===0 || !exercise_id || !repeat || !block || !exercisesoftraining?.training_id){
            return;
        }

        const newExercisesOfTraining: ExercisesOfTrainingModel = {
            id_exerciseoftraining:"",
            training_id:exercisesoftraining?.training_id,
            exercise_id: exercise_id,
            block: block,
            repeat:repeat,
            description:description,
            created_at:Date.now(),
            update_at:Date.now(),
            training: exercisesoftraining.training,
        };
        console.log(newExercisesOfTraining);
        api.post("/exercisesoftraining",newExercisesOfTraining,{
            headers:{
                Authorization: `Bearer ${token}`
              }
        }).then(response =>{
            const {data}=response;
            newExercisesOfTraining.id_exerciseoftraining=data.id_exerciseoftraining;
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
                    <select value={exercise_id} onChange={(e)=>setExercise_Id(e.target.value)}>
                        {state.exercises.map((item,index)=>
                            <option key={item.id_exercise} value={item.id_exercise}>{item.name_exercise}</option>
                        )}
                    </select>
                    <h2>Séries:    </h2>
                    <input type='number' value={block} onChange={(e)=>setBlock(e.target.valueAsNumber)}/>
                    <h2>Repetições: </h2>
                    <input type='text' value={repeat} onChange={(e)=>setRepeat(e.target.value)}/>
                    <h2>Observação: </h2>
                    <input type='text' value={description} onChange={(e)=>setDescription(e.target.value)}/>                    

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