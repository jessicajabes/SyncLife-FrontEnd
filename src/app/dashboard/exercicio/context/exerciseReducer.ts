
import { ExerciceStateModel } from "@/app/models/ExerciseStateModel";
import { ExerciseActionModel, ExerciseActionTypes } from "./ExerciseActions";
import { api } from "@/services/api";
import { getCookieServer } from "@/lib/cookieServer";



export function exerciseReducer(
    state:ExerciceStateModel,
    action: ExerciseActionModel,
): ExerciceStateModel{
    switch(action.type){

        case ExerciseActionTypes.GET_EXERCISE:{

            return state;
        }
    }
    return state;
}