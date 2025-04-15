"use server"
import { TrainingStateModel } from "@/app/models/TrainingStateModel";



export const initialTrainingState: TrainingStateModel = {
     training: [],
     token: null,
     modalIsOpen:false,
     trainingModal:null,
    };

