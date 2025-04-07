import { ExerciseModel } from "@/app/models/ExerciseModel";

export enum ExerciseActionTypes {
    GET_EXERCISE = 'GET_EXERCISE',
    PUT_EXERCISE = 'PUT_EXERCISE',
    DELETE_EXERCISE = 'DELETE_EXERCISE',
    CREATE_EXERCISE = 'CREATE EXERCISE',
    REQUEST_OPEN_MODAL = 'REQUEST_OPEN_MODAL',
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
    payload: ExerciseModel;
    }|{
    type: ExerciseActionTypes.REQUEST_OPEN_MODAL;
    payload: ExerciseModel;      
    };
  

type ExerciseActionsWithoutPayload =
  {
    type: ExerciseActionTypes.GET_EXERCISE;
 };


  export type ExerciseActionModel =
  | ExerciseActionsWithPayload
  | ExerciseActionsWithoutPayload;