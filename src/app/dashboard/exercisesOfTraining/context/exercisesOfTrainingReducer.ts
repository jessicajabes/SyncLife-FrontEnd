import { ExercisesOfTrainingModel } from '../../../models/ExercisesOfTrainingModel';
import { ExercisesOfTrainingStateModel } from "@/app/models/ExercisesOfTrainingStateModel";
import { ExercisesOfTrainingActionModel, ExercisesOfTrainingActionTypes } from "./ExercisesOfTrainingActions";


export function exercisesoftrainingReducer(

    state:ExercisesOfTrainingStateModel,
    action: ExercisesOfTrainingActionModel,
): ExercisesOfTrainingStateModel{

    switch(action.type){


        case ExercisesOfTrainingActionTypes.CREATE_EXERCISESOFTRAINING:{

            const newExercisesOfTraining = action.payload;
            
            return {
                ...state,
                modalIsOpen:false,
                exercisesoftraining:[...state.exercisesoftraining, newExercisesOfTraining]
            }
        }
        case ExercisesOfTrainingActionTypes.REQUEST_OPEN_MODAL:{
            const exercisesoftraining = action.payload;
            return{
                ...state,
                modalIsOpen:true,
                exercisesoftrainingModal:exercisesoftraining
            }
        }
        case ExercisesOfTrainingActionTypes.REQUEST_OPEN_MODAL_CREATE:{
            return{
                ...state,
                modalIsOpen:true,
            }
        }
        case ExercisesOfTrainingActionTypes.DELETE_EXERCISESOFTRAINING:{
            const deleteExercisesOfTraining = action.payload;
            state.exercisesoftraining.map((exercisesoftraining,item) =>{
                if(deleteExercisesOfTraining && deleteExercisesOfTraining.id_exerciseoftraining === exercisesoftraining.id_exerciseoftraining){
                    delete state.exercisesoftraining[item];
                }})
            return{
                ...state,
                modalIsOpen:false,
                exercisesoftrainingModal:null,
            }
        }
        case ExercisesOfTrainingActionTypes.PUT_EXERCISESOFTRAINING:{
            const putExercisesOfTraining = action.payload;
            console.log("Action", putExercisesOfTraining);
            return{
                ...state,
                modalIsOpen:false,
                exercisesoftrainingModal:null,
                exercisesoftraining: state.exercisesoftraining.map((exercisesoftraining,item) =>{
                    if(putExercisesOfTraining && putExercisesOfTraining.id_exerciseoftraining === exercisesoftraining.id_exerciseoftraining){


                        return{...exercisesoftraining,
                             block: putExercisesOfTraining.block, 
                             repeat: putExercisesOfTraining.repeat,
                             update_at: putExercisesOfTraining.update_at}
                    }
                    return exercisesoftraining;
                })
            }
        }
        
        case ExercisesOfTrainingActionTypes.CLOSE_MODAL:{
            return{
                ...state,
                modalIsOpen:false,
                exercisesoftrainingModal:null,
            }
        }
        default:
            throw new Error();
    }
    return state;
}