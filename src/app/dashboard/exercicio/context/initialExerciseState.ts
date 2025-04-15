"use server"
import { ExerciseStateModel } from "@/app/models/ExerciseStateModel";



export const initialExerciseState: ExerciseStateModel = {
     exercises: [],
     token: null,
     modalIsOpen:false,
     exerciseModal:null,
    };

