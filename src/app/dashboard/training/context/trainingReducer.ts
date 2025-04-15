import { TrainingModel } from '../../../models/TrainingModel';
import { TrainingStateModel } from "@/app/models/TrainingStateModel";
import { TrainingActionModel, TrainingActionTypes } from "./TrainingActions";


export function trainingReducer(

    state:TrainingStateModel,
    action: TrainingActionModel,
): TrainingStateModel{

    switch(action.type){


        case TrainingActionTypes.CREATE_training:{

            const newtraining = action.payload;
            
            return {
                ...state,
                modalIsOpen:false,
                training:[...state.training, newtraining]
            }
        }
        case TrainingActionTypes.REQUEST_OPEN_MODAL:{
            const training = action.payload;
            return{
                ...state,
                modalIsOpen:true,
                trainingModal:training
            }
        }
        case TrainingActionTypes.REQUEST_OPEN_MODAL_CREATE:{
            return{
                ...state,
                modalIsOpen:true,
            }
        }
        case TrainingActionTypes.DELETE_training:{
            const deletetraining = action.payload;
            state.training.map((training,item) =>{
                if(deletetraining && deletetraining.id_training === training.id_training){
                    delete state.training[item];
                }})
            return{
                ...state,
                modalIsOpen:false,
                trainingModal:null,
            }
        }
        case TrainingActionTypes.PUT_training:{
            const puttraining = action.payload;
            console.log("Action", puttraining);
            return{
                ...state,
                modalIsOpen:false,
                trainingModal:null,
                training: state.training.map((training,item) =>{
                    if(puttraining && puttraining.id_training === training.id_training){
                        console.log("aquiiii", training)

                        return{...training,
                             name_training: puttraining.name_training, 
                             description_training: puttraining.description_training,
                            update_at: puttraining.update_at}
                    }
                    return training;
                })
            }
        }
        
        case TrainingActionTypes.CLOSE_MODAL:{
            return{
                ...state,
                modalIsOpen:false,
                trainingModal:null,
            }
        }
        default:
            throw new Error();
    }
    return state;
}