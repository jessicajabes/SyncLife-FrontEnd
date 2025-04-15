"use client"
import styles from './styles.module.scss'
import { useTrainingContext } from '../../context/useTrainingContext';
import { X } from 'lucide-react'
import { TrainingModel } from '@/app/models/TrainingModel';
import { api } from '../../../../../services/api';
import { TrainingActionTypes } from '../../context/TrainingActions';
import {useState} from 'react'
import { toast } from 'sonner';


export function Modaltraining(){
    const {state,dispatch} = useTrainingContext();
    const training = state.trainingModal;
    const token = state.token;
    const [name_training, setName_training] = useState(training != null? (training.name_training) : "");
    const [description_training, setDescription_training] = useState(training != null? (training.description_training) : "");


    function handleCloseModal(){
        dispatch({type: TrainingActionTypes.CLOSE_MODAL});
    }


    async function handleDeletetraining(training: TrainingModel){
    await api.delete("/training",{
                headers:{
                    Authorization: `Bearer ${token}`
                  },
                params:{
                    id_training: training.id_training
                }
            })     
            .then(()=>{
                dispatch({type:TrainingActionTypes.DELETE_training, payload:training});
            }).then(()=>{
                toast.success("Treino deletado com sucesso!");
            }).catch((err)=>{
                toast.error("Erro ao deletar treino");
                console.log(err);
            })     
        }

      
  
    async function handlePuttraining(training: TrainingModel){
        console.log("handle",name_training,setName_training);
        if((name_training && description_training)){
            const puttraining: TrainingModel = {
                id_training:training.id_training,
                name_training: name_training,
                description_training: description_training,
                created_at:training.created_at,
                update_at:Date.now(),
            };
            console.log("PUT training",puttraining)
            await api.put("/training", puttraining, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })     
            .then(()=>{
                dispatch({type:TrainingActionTypes.PUT_training, payload:puttraining});
            }).then(()=>{
                toast.success("Treino alterado com sucesso!");
            }).catch((err)=>{
                toast.error("Erro ao alterar treino");
                console.log(err);
            }) 
        }     
    }

    async function handleCreatetraining(){
        if(name_training==="" || description_training ==="" || !name_training || !description_training){
            return;
        }

        const newtraining: TrainingModel = {
            id_training:"",
            name_training: name_training,
            description_training: description_training,
            created_at:Date.now(),
            update_at:Date.now(),
        };
        console.log(newtraining);
        api.post("/training",newtraining,{
            headers:{
                Authorization: `Bearer ${token}`
              }
        }).then(response =>{
            const {data}=response;
            newtraining.id_training=data.id_training;
        })     
        .then(()=>{
            dispatch({type:TrainingActionTypes.CREATE_training, payload:newtraining});
        }).then(()=>{
            toast.success("Treino criado com sucesso!");
        }).catch((err)=>{
            toast.error("Erro ao criar treino");
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
                    <h1>Treino:</h1>
                    <input type='text' value={name_training} onChange={(e)=>setName_training(e.target.value)}/>
                    <h1>Descrição:</h1>
                    <textarea  value={description_training} onChange={(e)=>setDescription_training(e.target.value)}/>
                </form>
                {(training !== null) ?( 
                <div className={styles.divButtons}>
                    <button onClick={()=>handlePuttraining(training)}>Alterar</button>
                    <button onClick={()=>handleDeletetraining(training)}>Deletar</button>
                </div>
                 ):(
                <div className={styles.divButtons}>
                        <button onClick={()=>handleCreatetraining()}>Cadastrar</button>
                </div>

                 )}
            </section>
        </dialog>
    

    </>
    )
}