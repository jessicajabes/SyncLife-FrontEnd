import { ExerciseModel } from "../../../models/ExerciseModel";

export enum ExerciseActionTypes {
    GET_EXERCISE = 'GET_EXERCISE',
    PUT_EXERCISE = 'PUT_EXERCISE',
    DELETE_EXERCISE = 'DELETE_EXERCISE',
    CREATE_EXERCISE = 'CREATE EXERCISE',
    REQUEST_OPEN_MODAL = 'REQUEST_OPEN_MODAL',
    REQUEST_OPEN_MODAL_CREATE = 'REQUEST_OPEN_MODAL_CREATE',
    CLOSE_MODAL = 'CLOSE_MODAL'
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
    payload: ExerciseModel ;      
    };
  

type ExerciseActionsWithoutPayload =
  {
    type: ExerciseActionTypes.CLOSE_MODAL;
 }|{
  type: ExerciseActionTypes.REQUEST_OPEN_MODAL_CREATE;
 };


  export type ExerciseActionModel =
  | ExerciseActionsWithPayload
  | ExerciseActionsWithoutPayload;