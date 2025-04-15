import { TrainingModel } from "../../../models/TrainingModel";

export enum TrainingActionTypes {
    GET_training = 'GET_training',
    PUT_training = 'PUT_training',
    DELETE_training = 'DELETE_training',
    CREATE_training = 'CREATE training',
    REQUEST_OPEN_MODAL = 'REQUEST_OPEN_MODAL',
    REQUEST_OPEN_MODAL_CREATE = 'REQUEST_OPEN_MODAL_CREATE',
    CLOSE_MODAL = 'CLOSE_MODAL'
  }

type TrainingActionsWithPayload = 
   |{
    type: TrainingActionTypes.CREATE_training;
    payload: TrainingModel;
  }|{
    type: TrainingActionTypes.PUT_training;
    payload: TrainingModel;
  }|{    
    type: TrainingActionTypes.DELETE_training;
    payload: TrainingModel;
    }|{
    type: TrainingActionTypes.REQUEST_OPEN_MODAL;
    payload: TrainingModel ;      
    };
  

type TrainingActionsWithoutPayload =
  {
    type: TrainingActionTypes.CLOSE_MODAL;
 }|{
  type: TrainingActionTypes.REQUEST_OPEN_MODAL_CREATE;
 };


  export type TrainingActionModel =
  | TrainingActionsWithPayload
  | TrainingActionsWithoutPayload;