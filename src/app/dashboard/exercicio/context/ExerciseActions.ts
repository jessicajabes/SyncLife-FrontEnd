import { ExerciseModel } from "@/app/models/ExerciseModel";

export enum ExerciseActionTypes {
    GET_EXERCISE = 'GET_EXERCISE',
    PUT_EXERCISE = 'PUT_EXERCISE',
    DELETE_EXERCISE = 'DELETE_EXERCISE',
    CREATE_EXERCISE = 'CREATE EXERCISE',
  }

type ExerciseActionsWithPayload =
   |{
    type: ExerciseActionTypes.CREATE_EXERCISE;
    payload: ExerciseModel;
  }|{
    type: ExerciseActionTypes.PUT_EXERCISE;
    payload: ExerciseModel;
  }|{    
    type: ExerciseActionTypes.DELETE_EXERCISE;
    payload: ExerciseModel['id_exercise'];
  };

type ExerciseActionsWithoutPayload =
  {
    type: ExerciseActionTypes.GET_EXERCISE;
 };


  export type ExerciseActionModel =
  | ExerciseActionsWithPayload
  | ExerciseActionsWithoutPayload;