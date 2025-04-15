import { ExercisesOfTrainingModel } from "../../../models/ExercisesOfTrainingModel";

export enum ExercisesOfTrainingActionTypes {
    GET_EXERCISESOFTRAINING = 'GET_EXERCISESOFTRAINING',
    PUT_EXERCISESOFTRAINING = 'PUT_EXERCISESOFTRAINING',
    DELETE_EXERCISESOFTRAINING = 'DELETE_EXERCISESOFTRAINING',
    CREATE_EXERCISESOFTRAINING = 'CREATE EXERCISESOFTRAINING',
    REQUEST_OPEN_MODAL = 'REQUEST_OPEN_MODAL',
    REQUEST_OPEN_MODAL_CREATE = 'REQUEST_OPEN_MODAL_CREATE',
    CLOSE_MODAL = 'CLOSE_MODAL'
  }

type ExercisesOfTrainingActionsWithPayload = 
   |{
    type: ExercisesOfTrainingActionTypes.CREATE_EXERCISESOFTRAINING;
    payload: ExercisesOfTrainingModel;
  }|{
    type: ExercisesOfTrainingActionTypes.PUT_EXERCISESOFTRAINING;
    payload: ExercisesOfTrainingModel;
  }|{    
    type: ExercisesOfTrainingActionTypes.DELETE_EXERCISESOFTRAINING;
    payload: ExercisesOfTrainingModel;
    }|{
    type: ExercisesOfTrainingActionTypes.REQUEST_OPEN_MODAL;
    payload: ExercisesOfTrainingModel ;      
    };
  

type ExercisesOfTrainingActionsWithoutPayload =
  {
    type: ExercisesOfTrainingActionTypes.CLOSE_MODAL;
 }|{
  type: ExercisesOfTrainingActionTypes.REQUEST_OPEN_MODAL_CREATE;
 };


  export type ExercisesOfTrainingActionModel =
  | ExercisesOfTrainingActionsWithPayload
  | ExercisesOfTrainingActionsWithoutPayload;