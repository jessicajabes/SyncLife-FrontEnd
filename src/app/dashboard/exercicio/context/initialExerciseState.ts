"use server"
import { ExerciceStateModel } from "@/app/models/ExerciseStateModel";



export const initialExerciseState: ExerciceStateModel = {
     exercises: [],
     token: null,
     modalIsOpen:false,
     exerciseModal:null,
    };

