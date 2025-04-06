import { ExerciceStateModel } from "@/app/models/ExerciseStateModel";
import { ExerciseActionModel, ExerciseActionTypes } from "./ExerciseActions";


export function exerciseReducer(

    state:ExerciceStateModel,
    action: ExerciseActionModel,
): ExerciceStateModel{

    switch(action.type){

        case ExerciseActionTypes.GET_EXERCISE:{

            return state;
        }
        case ExerciseActionTypes.CREATE_EXERCISE:{

            const newExercise = action.payload;
            return {
                ...state,
                exercises:[...state.exercises, newExercise]
            }
        }
        default:
            throw new Error();
    }
    return state;
}