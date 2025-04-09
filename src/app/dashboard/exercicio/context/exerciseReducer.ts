import { ExerciseModel } from './../../../models/ExerciseModel';
import { ExerciceStateModel } from "@/app/models/ExerciseStateModel";
import { ExerciseActionModel, ExerciseActionTypes } from "./ExerciseActions";


export function exerciseReducer(

    state:ExerciceStateModel,
    action: ExerciseActionModel,
): ExerciceStateModel{

    switch(action.type){


        case ExerciseActionTypes.CREATE_EXERCISE:{

            const newExercise = action.payload;
            
            return {
                ...state,
                modalIsOpen:false,
                exercises:[...state.exercises, newExercise]
            }
        }
        case ExerciseActionTypes.REQUEST_OPEN_MODAL:{
            const exercise = action.payload;
            return{
                ...state,
                modalIsOpen:true,
                exerciseModal:exercise
            }
        }
        case ExerciseActionTypes.REQUEST_OPEN_MODAL_CREATE:{
            return{
                ...state,
                modalIsOpen:true,
            }
        }
        case ExerciseActionTypes.DELETE_EXERCISE:{
            const deleteExercise = action.payload;
            state.exercises.map((exercise,item) =>{
                if(deleteExercise && deleteExercise.id_exercise === exercise.id_exercise){
                    delete state.exercises[item];
                }})
            return{
                ...state,
                modalIsOpen:false,
                exerciseModal:null,
            }
        }
        case ExerciseActionTypes.PUT_EXERCISE:{
            const putExercise = action.payload;
            console.log("Action", putExercise);
            return{
                ...state,
                modalIsOpen:false,
                exerciseModal:null,
                exercises: state.exercises.map((exercise,item) =>{
                    if(putExercise && putExercise.id_exercise === exercise.id_exercise){
                        console.log("aquiiii", exercise)

                        return{...exercise,
                             name_exercise: putExercise.name_exercise, 
                             description_exercise: putExercise.description_exercise,
                            update_at: putExercise.update_at}
                    }
                    return exercise;
                })
            }
        }
        
        case ExerciseActionTypes.CLOSE_MODAL:{
            return{
                ...state,
                modalIsOpen:false,
                exerciseModal:null,
            }
        }
        default:
            throw new Error();
    }
    return state;
}